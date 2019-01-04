import React from 'react';
import ContentLoader from 'react-content-loader';
import './App.scss';
import './Animation.scss';
import 'bootstrap';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const profileImage = require('../../assets/images/profile.png');
const articleImage = require('../../assets/images/cup.jpg');

const ArticleCard = (props) => {
  const { slug, username, title, likes, dislikes, comments } = props;
  const profileLink = `/profile/${username}`;
  const articleLink = `/article/detail/${slug}`;

  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="card">
        <div className="single-post post-style-1">
          <div className="blog-image">
            <img src={articleImage} alt="article pic" />
          </div>
          <a className="avatar username" href={profileLink}>
            <img src={profileImage} alt="user profile pic" />
          </a>
          <div className="clear" />
          <div className="blog-info">
            <h4 className="title">
              <a href={articleLink}><b>{title}</b></a>
              <br />
              <span className="username"><a href={profileLink}><b>{username}</b></a></span>

            </h4>
            <ul className="post-footer">
              <li>
                <a href={articleLink}>
                  <i className="glyphicon glyphicon-thumbs-up" />
                  {likes}
                </a>

              </li>
              <li>
                <a href={articleLink}>
                  <i className="glyphicon glyphicon-thumbs-down" />
                  {dislikes}
                </a>

              </li>
              <li>
                <a href={articleLink}>
                  <i className="glyphicon glyphicon-comment" />
                  {comments}
                </a>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  userimage: propTypes.string,
  timecreated: propTypes.string,
  description: propTypes.string,
  username: propTypes.string,
  title: propTypes.string,
  image: propTypes.string,
  slug: propTypes.string,
  likes: propTypes.number,
  dislikes: propTypes.number,
  comments: propTypes.number,
};

ArticleCard.defaultProps = {
  userimage: '',
  timecreated: '',
  description: '',
  username: '',
  title: '',
  image: '',
  slug: '',
  likes: 0,
  dislikes: 0,
  comments: 0,
};


export default ArticleCard;

export const MyLoader = props => (
  <ContentLoader
    height={500}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <circle cx="200" cy="252" r="30" />
    <rect x="152.8" y="299" rx="4" ry="4" width="100" height="13" />
    <rect x="179" y="332.83" rx="4" ry="4" width="50" height="14.4" />
    <rect x="1" y="70" rx="5" ry="5" width="400" height="176" />
    <rect x="6" y="385" rx="4" ry="4" width="50" height="14.4" />
    <rect x="179" y="385" rx="4" ry="4" width="50" height="14.4" />
    <rect x="340" y="385" rx="4" ry="4" width="50" height="14.4" />
  </ContentLoader>
);
