/* eslint-disable no-self-assign */
/* eslint-disable no-const-assign */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './like.scss';
import {
  likesGet,
  dislikesGet,
  likesArticleActions,
  dislikesArticleActions,
} from '../../actions/likes.actions';

const slug = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

export class LikesDislikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeloading: false,
      dislikeloading: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(likesGet(slug));
    dispatch(dislikesGet(slug));
  }

  nFormatter = (number) => {
    const SI_SYMBOL = ['', 'k', 'M', 'B', 'T'];
    // what tier? (determines SI symbol)
    // eslint-disable-next-line no-bitwise
    const tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier === 0) return number;

    // get suffix and determine scale
    const suffix = SI_SYMBOL[tier];
    // eslint-disable-next-line no-restricted-properties
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add suffix
    return `${Math.trunc(scaled)} ${suffix}`;
  }


  handleLikeClick = () => {
    const { dispatch } = this.props;
    this.setState({ likeloading: true });
    dispatch(likesArticleActions(slug));
    setTimeout(() => {
      this.setState({ likeloading: false });
    }, 1000);
  };

  handleDislikeClick = () => {
    const { dispatch } = this.props;
    this.setState({ dislikeloading: true });
    dispatch(dislikesArticleActions(slug));
    setTimeout(() => {
      this.setState({ dislikeloading: false });
      this.forceUpdate();
    }, 1000);
  };

  render() {
    const { likeloading, dislikeloading } = this.state;
    const { payload } = this.props;
    const numberOfLikes = payload.likes;
    const numberOfdisLikes = payload.dislikes;

    return (
      <div className="likecontainer">
        <button
          type="button"
          id="likebutton"
          className="btn btn-default btn-responsive up_button"
          onClick={this.handleLikeClick}
        >
          {likeloading ? (
            <i className="fa fa-spinner fa-spin like-spinners thumbsup" />
          ) : (
            <i className="fa fa-thumbs-up fa-2x" id="thumbsup" />
          )}
          {' '}
          {this.nFormatter(numberOfLikes)}
        </button>
        <button
          type="button"
          id="likebutton"
          className="btn btn-default btn-responsive up_button"
          onClick={this.handleDislikeClick}
        >
          {dislikeloading ? (
            <i className="fa fa-spinner fa-spin like-spinners thumbsdown" />
          ) : (
            <i className="fa fa-thumbs-down fa-2x" id="thumbsdown" />
          )}
          {' '}
          {this.nFormatter(numberOfdisLikes)}
        </button>
      </div>
    );
  }
}

LikesDislikes.propTypes = {
  payload: propTypes.string,
  dispatch: propTypes.string,
};

LikesDislikes.defaultProps = {
  payload: '',
  dispatch: '',
};

const mapsStateToProps = state => ({
  payload: state.likesReducer,
});
export default connect(mapsStateToProps)(LikesDislikes);
