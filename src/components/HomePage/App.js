import React, { Component } from 'react';
import './App.scss';
import './Animation.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { getAllArticles } from '../../actions/articles.action';
import ArticleCard, { MyLoader } from './containers';
import { USER_IMAGE } from '../../constants/articles';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleLoadPrev = this.handleLoadPrev.bind(this);
  }

  componentDidMount() {
    const { fetchAllArticles } = this.props;
    const { page } = this.state;
    fetchAllArticles(page);
  }

  handleLoadMore() {
    const { page } = this.state;
    const { fetchAllArticles, articles } = this.props;
    // if the page === page_size, there could be more articles
    if (articles.length === 12) {
      this.setState({ page: page + 1 });
    }
    fetchAllArticles(page + 1);
  }

  handleLoadPrev() {
    const { page } = this.state;
    const { fetchAllArticles } = this.props;
    if (page === 1) {
      this.setState({ page: 1 });
    } else {
      this.setState({ page: page - 1 });
    }
    fetchAllArticles(page - 1);
  }

  render() {
    const { page } = this.state;
    const { articles } = this.props;
    const newArticles = articles.map(article => (
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
          {
            articles.length !== 0
              ? (
                <div>
                  <div className="row">
                    {newArticles}
                  </div>
                  <ul className="pagination pagination-lg">
                    {
                      page !== 1
                        ? (
                          <li className="page-item"><a className="page-link" href onClick={this.handleLoadPrev}>Prev</a></li>
                        )
                        : (
                          ''
                        )
                    }
                    {
                      articles.length >= 12
                        ? (
                          <li className="page-item"><a className="page-link" href onClick={this.handleLoadMore}>Next</a></li>
                        )
                        : (
                          ''
                        )
                    }
                  </ul>
                </div>
              )
              : (
                <div className="row">
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                  <MyLoader className="col-lg-4 col-md-6 d-flex align-items-stretch" />
                </div>
              )
          }
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
