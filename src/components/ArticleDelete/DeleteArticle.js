import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticleApi } from '../../actions/articles.action';
import './delete.scss';

const edit = require('../../assets/images/edit.png');
const image = require('../../assets/images/delete.png');

class DeleteArticle extends Component {
  handleDelete =() => {
    const { dispatch, data } = this.props;
    dispatch(deleteArticleApi(data.slug));
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="control-btn">
          <button className="delete" type="button" onClick={this.handleDelete}>
            <img className="mybtn" src={image} alt="" />
          </button>
          <a href={`/article/update/${data.slug}`} onClick={this.saveArticle}>
            <img src={edit} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

DeleteArticle.propTypes = {
  data: {},
};

DeleteArticle.defaultProps = {
  data: {},
};

const mapStateToProps = ({ deleteReducer }) => ({
  deleteReducer,
});
DeleteArticle.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  handleDelete: propTypes.func,
};
DeleteArticle.propTypes = {
  dispatch: propTypes.func.isRequired,
};
DeleteArticle.defaultProps = {
  handleDelete: propTypes.func,
};

export default connect(mapStateToProps)(DeleteArticle);
