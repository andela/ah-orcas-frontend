import React from 'react';
import 'bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from 'prop-types';
import TagList from './tagComponent';
import SocialShare from '../SocialShare/ShareComponent';

export const Article = (props) => {
  const { title, description, body, username, tags, slug } = props;
  const profileLink = `/profile/${username}`;
  return (
    <div className="container-fluid">
      <h2 className="title">
        {title}
        <br />
        <span className="username"><a href={profileLink}><b>{username}</b></a></span>

      </h2>
      <div className="">
        <p className="description">{description}</p>
      </div>
      <div className="article-body">
        <div className="row">
          <div className="col-11">
            <p>{body}</p>
          </div>
          <div className="col-1, socialshare">
            <SocialShare title={title} slug={slug} />
          </div>
          <div />
        </div>
        <TagList tags={tags} />
      </div>
    </div>
  );
};

Article.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  body: propTypes.string,
  tags: propTypes.array,
  slug: propTypes.string,
  username: propTypes.string,
};

Article.defaultProps = {
  title: '',
  description: '',
  body: '',
  tags: [],
  slug: '',
  username: '',
};


export default Article;
