import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewSingleArticle } from '../../actions/articles.action';
import { Title, Description, Body } from './ArticleViewComponents';

const App = (props) => {
  const slug = localStorage.getItem('slug');
  const { singleArticle, article } = props;
  singleArticle('this-is-an-awesome-title');

  return (
    <div>
      <Title title={article.title} />
      <br />
      <Description description={article.description} />
      <br />
      <Body body={article.body} />
    </div>
  );
};

App.propTypes = {
  singleArticle: propTypes.func,
  article: propTypes.object,
};

App.defaultProps = {
  singleArticle: propTypes.func,
  article: propTypes.object,
};

function mapStateToProps(state) {
  return {
    article: state.article,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    viewSingleArticle: bindActionCreators(viewSingleArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
