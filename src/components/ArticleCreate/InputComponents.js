import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from 'prop-types';
import Alert from '../LoginPage/alert';

import { TitleHint } from '../../constants/articles';


const BodyinputComponent = (props) => {
  const {
    description, body, handlechange, buttonDisabled, submitArticle, title, loading, success, error,
  } = props;
  return (
    <div className="article-create-page">
      <div className="form-group-lg title-input">
        {
              success
                ? (
                  <div className="Alert">
                    <Alert message="Successfully Created an Article!" color="success" />
                  </div>
                )
                : ''}
        {
              error
                ? (
                  <div className="Alert">
                    <Alert message="Sorry. An error occurred, while posting the artcle, please try again!" color="danger" />
                  </div>
                ) : ''
          }

        <input name="title" value={title} onChange={handlechange} className="form-control description" placeholder={TitleHint} />
      </div>
      <div className="form-group-lg description-input">
        <input name="description" value={description} onChange={handlechange} style={{ border: '1px solid' }} className="form-control description" placeholder="Description" />
      </div>
      <div className="form-control-lg body-input">
        <textarea name="body" onChange={handlechange} value={body} style={{ border: '1px solid' }} className="form-control description " placeholder="Enter Article body here...." />
        <button
          onClick={submitArticle}
          type="submit"
          className="publish-btn btn btn-primary"
          style={{ background: '#2ebaae' }}
          disabled={buttonDisabled}
        >
          {loading ? <i className="fa fa-spinner fa-spin" /> : 'Publish'}
        </button>
      </div>
    </div>);
};

BodyinputComponent.propTypes = {
  submitArticle: propTypes.func,
  title: propTypes.string,
  handlechange: propTypes.func,
  body: propTypes.string,
  description: propTypes.string,
  buttonDisabled: propTypes.bool.isRequired,
  loading: propTypes.bool,
  success: propTypes.bool,
  error: propTypes.string,
};

BodyinputComponent.defaultProps = {
  submitArticle: propTypes.func,
  title: '',
  handlechange: propTypes.func,
  body: '',
  description: '',
  loading: propTypes.bool,
  success: propTypes.bool,
  error: '',
};


export default BodyinputComponent;
