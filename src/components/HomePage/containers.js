import React from 'react';
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
          <a className="avatar" href={profileLink}>
            <img src={profileImage} alt="user profile pic" />
          </a>
          <div className="blog-info">
            <h4 className="title"><a href={articleLink}><b>{title}</b></a></h4>
            <ul className="post-footer">
              <li><a href={articleLink}><i className="glyphicon glyphicon-thumbs-up" />{likes}</a></li>
              <li><a href={articleLink}><i className="glyphicon glyphicon-thumbs-down" />{dislikes}</a></li>
              <li><a href={articleLink}><i className="glyphicon glyphicon-comment" />{comments}</a></li>
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
