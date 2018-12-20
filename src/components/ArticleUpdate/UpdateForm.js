import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ArticleCreate/App.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateArticle } from '../../actions/articles.action';
import Alert from '../LoginPage/alert';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      success: false,
      favorited: [],
      loading: false,
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.titleHolder,
      description: nextProps.descriptionHolder,
      body: nextProps.bodyHolder,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitUpdate() {
    const { slug, updatearticle } = this.props;
    updatearticle(this.state, slug, this.handleError, this.handleSuccess);
    this.setState(
      {
        loading: true,
      },
    );
  }

  handleError() {
    this.setState({
      error: true,
      success: false,
      loading: false,
    });
  }


  handleSuccess() {
    this.setState({
      success: true,
    });
  }

  render() {
    const { title, description, body, loading, success, error } = this.state;
    return (
      <div className="article-create-page">
        <div className="form-group-lg title-input">
          {
                    success
                      ? (
                        <div className="Alert">
                          <Alert message="Successfully updated this Article!" color="success" />
                        </div>
                      )
                      : ''}
          {
                    error
                      ? (
                        <div className="Alert">
                          <Alert message="Sorry. An error occurred, while updating your article, please try again!" color="danger" />
                        </div>
                      ) : ''
                }

          <input name="title" value={title} id="title" onChange={this.handleChange} className="form-control description" />
        </div>
        <div className="form-group-lg description-input">
          <input name="description" value={description} onChange={this.handleChange} style={{ border: '1px solid' }} className="form-control description" />
        </div>
        <div className="form-control-lg body-input">
          <textarea name="body" onChange={this.handleChange} value={body} style={{ border: '1px solid' }} className="form-control description " />
          <button
            onClick={this.submitUpdate}
            id="update-form"
            type="submit"
            className="publish-btn btn btn-primary"
            style={{ background: '#2ebaae' }}
          >
            {loading ? <i className="fa fa-spinner fa-spin" /> : 'Update'}
          </button>
        </div>
      </div>);
  }
}

Form.propTypes = {
  titleHolder: propTypes.string,
  slug: propTypes.string,
  updatearticle: propTypes.func,
  descriptionHolder: propTypes.string,
  bodyHolder: propTypes.string,
};

Form.defaultProps = {
  titleHolder: '',
  slug: '',
  updatearticle: propTypes.func,
  descriptionHolder: '',
  bodyHolder: '',
};


function mapDispatchToProps(dispatch) {
  return {
    updatearticle: bindActionCreators(updateArticle, dispatch),
  };
}


export default connect(null, mapDispatchToProps)(Form);
