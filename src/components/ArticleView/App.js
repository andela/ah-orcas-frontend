import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewSingleArticle } from '../../actions/articles.action';
import { Title, Description, Body } from './ArticleViewComponents';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      descripton: '',
      body: '',
    };
  }

  componentDidMount() {
    const slug = localStorage.getItem('slug');
    this.props.viewSingleArticle(slug);
    this.setState({
      title: this.props.results.title,
    });
    console.error(this.props.results);
  }

  render() {
    return (
      <div>
        <Title />
        <Description />
        <Body />
      </div>
    );
  }
}

App.propTypes = {
  results: propTypes.object,
};

App.defaultProps = {
  results: propTypes.object,
};

function mapStateToProps(state) {
  return {
    results: state.viewarticle,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    viewSingleArticle: bindActionCreators(viewSingleArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
