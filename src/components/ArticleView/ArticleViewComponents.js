import React from 'react';
import 'bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from 'prop-types';
import TagList from './tagComponent';
import SocialShare from '../SocialShare/ShareComponent';

export const Article = (props) => {
  const { title, description, body, tags, slug } = props;
  return (
    <div className="container-fluid">
      <h2 className="title">{title}</h2>
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
        <br />
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
};

Article.defaultProps = {
  title: '',
  description: '',
  body: '',
  tags: [],
  slug: '',
};


export default Article;
