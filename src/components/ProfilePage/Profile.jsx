import React, { Component } from 'react';
import './Profile.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Swal from 'sweetalert2';
import propTypes from 'prop-types';
import ArticleCard from '../HomePage/containers';
import { getProfileAction, userArticlesAction, updateUserProfileAction } from '../../actions/profile.action';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      profileArticlesData: [],
      usernameUpdate: '',
      bioUpdate: '',
      usernameLocal: '',
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.onSuccess = this.onSuccess.bind(this);

    try {
      this.state.usernameLocal = JSON.parse(localStorage.getItem('user')).username;
    } catch (error) {
      // handle error
    }

    const { username } = this.props.match.params;

    getProfileAction(username).payload.then(p => this.setState({ profile: p.data.profile }));
    userArticlesAction(username).payload.then(p =>
      this.setState({ profileArticlesData: p.data.results }));
  }

  onSuccess = (username) => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.username = username;
    localStorage.setItem('user', JSON.stringify(user));
    const url = `${window.location.protocol}//${window.location.host}/profile/${username}`;

    window.open(url, '_self');
  };

  handleEditClick() {
    Swal({
      title: 'Edit profile',
      confirmButtonText: 'Submit',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="username">'
        + '<input id="swal-input2" class="swal2-input" placeholder="Bio">',
      focusConfirm: false,
      preConfirm: () => [
        this.setState({ usernameUpdate: document.getElementById('swal-input1').value }),
        this.setState({ bioUpdate: document.getElementById('swal-input2').value }),
        updateUserProfileAction({ username: this.state.usernameUpdate, bio: this.state.bioUpdate }),
        this.onSuccess(this.state.usernameUpdate),
      ],
    });
  }

  render() {
    const numOfArticles = this.state.profileArticlesData.length;
    const newArticles = this.state.profileArticlesData.map(article => (
      <ArticleCard
        key={article.id}
        slug={article.slug}
        title={article.title}
        article={article}
        username={article.author.username}
        timecreated={article.timecreated}
        description={article.description}
        comments={article.comments}
        likes={article.likes}
        dislikes={article.dislikes}
      />
    ));
    return (
      <div className="rela-block container-profile">
        <div className="rela-block profile-card">
          <div className="profile-pic" id="profile_pic" />
          <ProfileNameCard username={this.state.profile.username} bio={this.state.profile.bio} />
          <div className="rela-block profile-card-stats">
            <div className="floated profile-stat articles" id="num_works">
              {numOfArticles}
            </div>
            {this.state.usernameLocal === this.state.profile.username
              ? (
                <div className="floated profile-stat">
                  <button type="button" className="btn btn-outline-dark" onClick={() => this.handleEditClick()}>Edit</button>
                </div>
              )
              : (
                <div className="floated profile-stat">
                  <button type="button" className="btn btn-outline-dark">Follow</button>
                </div>
              )
            }
          </div>
        </div>
        <UserArticles articles={newArticles} />
      </div>
    );
  }
}

export const UserArticles = ({ articles }) => (
  <section className="blog-area section">
    <div className="container">
      <div className="row">
        {articles}
      </div>
    </div>
  </section>
);

export const ProfileNameCard = ({ ...props }) => (
  <div className="rela-block profile-name-container">
    <div className="rela-block user-name" id="user-name">{props.username}</div>
    <div className="rela-block user-desc" id="user-description">{props.bio}</div>
  </div>
);

UserArticles.propTypes = {
  articles: propTypes.array.isRequired,
};

Profile.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      username: propTypes.string.isRequired,
    }),
  }),
};

Profile.defaultProps = {
  match: {
    params: '',
  },
};

ProfileNameCard.propTypes = {
  username: propTypes.string,
  bio: propTypes.string,
};

ProfileNameCard.defaultProps = {
  username: '',
  bio: '',
};

export default Profile;
