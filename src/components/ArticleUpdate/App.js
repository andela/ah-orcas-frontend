import React from 'react';
import './App.scss';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewSingleArticle } from '../../actions/articles.action';
import UpdateComponent from './UpdateForm';


class App extends React.Component {
  componentDidMount() {
    const { singleArticle } = this.props;
    singleArticle(window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
  }


  render() {
    const { results } = this.props;
    return (
      <div className="form-input">
        <UpdateComponent
          slug={results.slug}
          titleHolder={results.title}
          descriptionHolder={results.description}
          bodyHolder={results.body}
        />
      </div>
    );
  }
}

App.propTypes = {
  results: propTypes.object,
  singleArticle: propTypes.func,
};

App.defaultProps = {
  results: {},
  singleArticle: propTypes.func,
};


function mapStateToProps({ viewarticle }) {
  return {
    results: viewarticle,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    singleArticle: bindActionCreators(viewSingleArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
