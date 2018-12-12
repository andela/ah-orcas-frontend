import React from 'react';
import './App.scss';
import './Animation.scss';
import 'bootstrap';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Title, Description, Userimage, TimeCreated, Image, Username } from './ArticleComponents';

const ArticleCard = (props) => {
  const { userimage, slug, timecreated, username, description, title, image } = props;
  return (
    <div className="card slide" style={{ background: '#FFFFFF' }}>
      <div className="card-text">
        <Userimage userimage={userimage} />
        <div className="text">
          <Username username={username} />
          <TimeCreated time={timecreated} />
        </div>
        <div className="clear" />
      </div>
      <div className="article-content">
        <Image className="image" src={image} />
        <Title className="title" title={title} />
        <Description slug={slug} description={description} />
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
};

ArticleCard.defaultProps = {
  userimage: '',
  timecreated: '',
  description: '',
  username: '',
  title: '',
  image: '',
};


export default ArticleCard;
