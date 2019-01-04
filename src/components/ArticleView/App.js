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
import DeleteModal from './DeleteModal/App';

let USER = {};
USER = JSON.parse(localStorage.getItem('user'));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  async componentDidMount() {
    const { singleArticle } = await this.props;
    singleArticle(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
  }

  componentWillReceiveProps(nextProps) {
    const { results } = nextProps;
    const { author } = results;
    this.setState(
      {
        username: author.username,
      },
    );
  }

  render() {
    const { rates, results } = this.props;
    const { username } = this.state;
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
        <DeleteModal title={results.title} data={results} />
        <br />
        <LikesDislikes />
        <RateArticle />
        <div className="reportlink">
          {USER && USER.username === username ? '' : (
            <a href="/article/report">Report Article</a>
          ) }
        </div>
        <br />
        <DeleteArticle author={results.author} data={results} />
        {/* Attributes have been borrowed / re-used from forgot password link on login page. */}

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
