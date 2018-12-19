import React from 'react';
import 'bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from 'prop-types';
import SocialShare from '../SocialShare/ShareComponent';

export const Article = (props) => {
  const { title, description, body, slug } = props;
  return (
    <div className="container-fluid">
      <h2>{title}</h2>
      <div className="">
        <p>{description}</p>
      </div>
      <div className="article-body">
        <div className="row">
          <div className="col-11">
            <p>{body}</p>
          </div>
          <div className="col-1">
            <SocialShare title={title} slug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  body: propTypes.string,
  slug: propTypes.string,
};

Article.defaultProps = {
  title: '',
  description: '',
  body: '',
  slug: '',
};


export default Article;
