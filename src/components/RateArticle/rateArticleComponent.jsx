import React from 'react';
import StarRatings from 'react-star-ratings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { rateArticle } from '../../actions/ratings.actions';
import authUser from '../../utils/user.util';
import './rate.scss';

class RateArticle extends React.Component {
  // this function handles the ratings
  // whenever there is a change on the number of stars clicked
  changeRating = (newRating) => {
    // get the slug from the local storage
    const mySlug = localStorage.getItem('slug');
    const { addRating } = this.props;
    addRating({
      rate: newRating,
      slug: mySlug,
    });
  };

  render() {
    const { userRating } = this.props;
    return (
      <div className="star-ratings">
        {/* check whether a user is logged in before allowing them to rate articles */}
        {authUser() ? (
          <div>
            <p className="user-ratings">
Rate this Article
              {' '}
              <br />
              <StarRatings
                rating={userRating}
                starHoverColor="gold"
                starRatedColor="gold"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="25px"
                starSpacing="5px"
              />
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
// propType validation
RateArticle.propTypes = {
  userRating: propTypes.number,
  addRating: propTypes.func.isRequired,
};

RateArticle.defaultProps = {
  userRating: '',
};

// selector function, adds props to RateArticle component
const mapStateToProps = state => ({
  userRating: state.rating.user_rating,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  addRating: rateArticle,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(RateArticle);
