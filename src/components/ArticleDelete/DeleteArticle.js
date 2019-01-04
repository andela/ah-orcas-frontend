import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './delete.scss';

const edit = require('../../assets/images/edit.png');
const image = require('../../assets/images/delete.png');

let USER = {};
USER = JSON.parse(localStorage.getItem('user'));


class DeleteArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        author: nextProps.author,
      },
    );
  }

  render() {
    const { author } = this.state;
    const { data } = this.props;
    return (
      <div>
        <div className="control-btn">
          {USER && USER.username === author.username ? (
            <div>
              <button className="delete" type="button" data-toggle="modal" data-target="#exampleModal">
                <img className="mybtn" src={image} alt="" />
              </button>
              <a href={`/article/update/${data.slug}`} onClick={this.saveArticle}>
                <img src={edit} alt="" />
              </a>
            </div>) : ''}
        </div>
      </div>
    );
  }
}

DeleteArticle.propTypes = {
  data: {},
  author: propTypes.object,
};

DeleteArticle.defaultProps = {
  data: {},
  author: {},
};

const mapStateToProps = ({ deleteReducer }) => ({
  deleteReducer,
});
DeleteArticle.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  handleDelete: propTypes.func,
};
DeleteArticle.defaultProps = {
  handleDelete: propTypes.func,
};

export default connect(mapStateToProps)(DeleteArticle);
