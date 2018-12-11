import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticleApi } from '../../actions/articles.action';

class DeleteArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
    };
  }

  handleDelete =() => {
    const { dispatch } = this.props;
    dispatch(deleteArticleApi('test-history-delete'));
  }

  render() {
    return (
      <div>
        <a onClick={this.handleDelete}>Delete</a>
      </div>
    );
  }
}

const mapStateToProps = ({ deleteReducer }) => ({
  deleteReducer,
});


export default connect(mapStateToProps)(DeleteArticle);
