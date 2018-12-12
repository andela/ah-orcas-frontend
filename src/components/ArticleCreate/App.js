import React from 'react';
import './App.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postArticle } from '../../actions/articles.action';
import { TitleInputComponent, DescriptionInputComponent, BodyinputComponent, TagList } from './InputComponents';
import Tagbtn from './Tags';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      title: '',
      description: '',
      body: '',
    };
    this.handlechange = this.handlechange.bind(this);
    this.clearTag = this.clearTag.bind(this);
    this.cleardata = this.cleardata.bind(this);
  }

  handlechange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  cleardata() {
    this.setState({
      tags: '',
      title: '',
      description: '',
      body: '',
    });
  }

  clearTag() {
    this.setState({
      tag: '',
    });
  }

  render() {
    const { tags, postArticle } = this.props;
    const { title, description, tag, body } = this.state;
    return (
      <div className="form-input">
        <TitleInputComponent handlechange={this.handlechange} title={title} />
        <DescriptionInputComponent handlechange={this.handlechange} description={description} />
        <BodyinputComponent
          cleardata={this.cleardata}
          postArticle={postArticle}
          tags={tags}
          data={this.state}
          body={body}
          handlechange={this.handlechange}
        />
      </div>
    );
  }
}

App.propTypes = {
  tags: propTypes.array,
};

App.defaultProps = {
  tags: [],
};

function mapStateToProps(state) {
  return {
    tags: state.tags,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    postArticle: bindActionCreators(postArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
