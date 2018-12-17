import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style.scss';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

class SocialShare extends Component {
  componentDidMount() {}

  render() {
    const { title, slug } = this.props;
    return (
      <div>
        <WhatsappShareButton
          url={`${process.env.REACT_APP_FRONTEND_URL}/article/${slug}`}
          title={title}
          className="share-icon"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TwitterShareButton
          url={`${process.env.REACT_APP_FRONTEND_URL}/article/${slug}`}
          title={title}
          className="share-icon"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={`${process.env.REACT_APP_FRONTEND_URL}/article/${slug}`}
          quote={title}
          className="share-icon"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <EmailShareButton
          url={`${process.env.REACT_APP_FRONTEND_URL}/article/${slug}`}
          title={title}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    );
  }
}

SocialShare.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default SocialShare;
