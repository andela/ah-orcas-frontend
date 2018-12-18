import React from 'react';
import './App.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postArticle } from '../../actions/articles.action';
import BodyinputComponent from './InputComponents';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      loading: false,
      success: false,
      buttonDisabled: true,
      error: false,

    };
    this.handlechange = this.handlechange.bind(this);
    this.cleardata = this.cleardata.bind(this);
    this.enablePublishButton = this.enablePublishButton.bind(this);
    this.submitArticle = this.submitArticle.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.enablePublishButton();
  }

  cleardata() {
    this.setState({
      title: '',
      description: '',
      body: '',
      loading: false,
      success: true,
    });
  }

  submitArticle() {
    const { postarticle } = this.props;
    postarticle(this.state, this.cleardata, this.handleError, this.props);
    this.setState(
      {
        loading: true,
      },
    );
  }

  enablePublishButton() {
    const { title, body } = this.state;
    if (title && body) {
      this.setState({
        buttonDisabled: false,
      });
    }
  }

  handleError() {
    this.setState({
      error: true,
      success: false,
      loading: false,
    });
  }


  render() {
    const { postarticle } = this.props;
    const { title, description, body, buttonDisabled, loading, success, error } = this.state;
    return (
      <div className="form-input">
        <BodyinputComponent
          submitArticle={this.submitArticle}
          buttonDisabled={buttonDisabled}
          postArticle={postarticle}
          body={body}
          handlechange={this.handlechange}
          title={title}
          description={description}
          loading={loading}
          success={success}
          error={error}
        />
      </div>
    );
  }
}

App.propTypes = {
  postarticle: propTypes.func,
};

App.defaultProps = {
  postarticle: propTypes.func,
};

function mapStateToProps(state) {
  return {
    tags: state.tags,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    postarticle: bindActionCreators(postArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
