import React from 'react';
import './App.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from 'prop-types';
import Alert from '../LoginPage/alert';
import TagComponent from './tagComponent';
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
        <TagComponent handlechange={handlechange} title={title} TitleHint={TitleHint} />
      </div>
      <div className="form-group-lg description-input">
        <input name="description" value={description} onChange={handlechange} style={{ border: '1px solid' }} className="form-control description" placeholder="Description" />
      </div>
      <div className="form-control-lg body-input">
        <textarea name="body" onChange={handlechange} value={body} style={{ border: '1px solid' }} className="form-control description " placeholder="Enter Article body here...." />
        <button
          onClick={submitArticle}
          type="submit"
          className="publish-btn btn btn-primary right"
          style={{ background: '#2ebaae' }}
          disabled={buttonDisabled}
        >
          {loading ? <i className="fa fa-spinner fa-spin" /> : 'Publish'}
        </button>
        <button
          onClick={() => { window.history.back(); }}
          id="update-form"
          type="submit"
          className="publish-btn left"
          style={{ textAlign: 'back-btn', color: '#2ebaae' }}
        >
          Back
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
  loading: propTypes.bool,
  success: propTypes.bool,
  error: propTypes.string,
  buttonDisabled: propTypes.func,
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
  buttonDisabled: propTypes.func,
};


export default BodyinputComponent;
