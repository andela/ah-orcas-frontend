import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';
import { viewSingleArticle } from '../../actions/articles.action';
import Body from './ArticleViewComponents';
import DeleteArticle from '../ArticleDelete/DeleteArticle';
import RateArticle from '../RateArticle/rateArticleComponent';
import AverageRate from '../RateArticle/averageRate';

import LikesDislikes from '../LikeDislike/likedislike';

class App extends Component {
  async componentDidMount() {
    const slug = localStorage.getItem('slug');
    const { singleArticle } = await this.props;
    singleArticle(slug);
  }

  render() {
    const { results, rates } = this.props;
    return (
      <div
        className="article-container"
      >
        <p className="average">
Average Ratings
          <AverageRate rates={rates} />
        </p>
        <Body
          tags={results.tags}
          username={results.title}
          title={results.title}
          descion={results.description}
          body={results.body}
          slug={results.slug}
        />
        <br />
        <LikesDislikes />
        <RateArticle />
        <DeleteArticle data={results} />
      </div>
    );
  }
}

App.propTypes = {
  results: propTypes.object,
  rates: propTypes.number.isRequired,
};

App.defaultProps = {
  results: {},
};


function mapStateToProps(state) {
  return {
    results: state.viewarticle,
    rates: state.rating.average_rating,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    singleArticle: bindActionCreators(viewSingleArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
