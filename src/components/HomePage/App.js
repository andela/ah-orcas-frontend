import React from 'react';
import './App.scss';
import './Animation.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllArticles } from '../../actions/articles.action';
import ArticleCard from './containers';
import { USER_IMAGE } from '../../constants/articles';

const App = function displayArticle(props) {
  props.getAllArticles();
  const newArticles = props.articles.map(article => (
    <ArticleCard
      key={article.id}
      slug={article.slug}
      title={article.title}
      username={article.author.username}
      timecreated={article.timecreated}
      description={article.description}
      userimage={USER_IMAGE}
    />
  ));
  return (
    <div className="card-columns article-container">
      {newArticles}
    </div>
  );
};


function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    getAllArticles: bindActionCreators(getAllArticles, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
