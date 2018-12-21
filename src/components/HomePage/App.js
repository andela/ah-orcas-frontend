import React, { Component } from 'react';
import './App.scss';
import './Animation.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { getAllArticles } from '../../actions/articles.action';
import ArticleCard from './containers';
import { USER_IMAGE } from '../../constants/articles';


class App extends Component {
  componentDidMount() {
    const { fetchAllArticles } = this.props;
    fetchAllArticles();
  }

  render() {
    const newArticles = this.props.articles.map(article => (
      <ArticleCard
        key={article.id}
        slug={article.slug}
        title={article.title}
        article={article}
        username={article.author.username}
        timecreated={article.timecreated}
        description={article.description}
        userimage={USER_IMAGE}
        comments={article.comments}
        likes={article.likes}
        dislikes={article.dislikes}
      />
    ));
    return (
      <section className="blog-area section">
        <div className="container">
          <div className="row">
            { newArticles }
          </div>
        </div>
      </section>
    );
  }
}

App.propTypes = {
  fetchAllArticles: propTypes.func,
  articles: propTypes.array,
};

App.defaultProps = {
  fetchAllArticles: propTypes.func,
  articles: propTypes.array,
};

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    fetchAllArticles: bindActionCreators(getAllArticles, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
