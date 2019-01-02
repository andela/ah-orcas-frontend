import React from 'react';
import StarRatings from 'react-star-ratings';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { rateArticle, avgRate } from '../../actions/ratings.actions';
import authUser from '../../utils/user.util';
import './rate.scss';

class RateArticle extends React.Component {
  // this function handles the ratings
  // whenever there is a change on the number of stars clicked
  changeRating = (newRating) => {
    // get the slug from the url
    const mySlug = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    const { addRating, aveRate, id } = this.props;
    addRating({
      rate: newRating,
      slug: mySlug,
    }, id);

    aveRate(id);
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
  aveRate: propTypes.func.isRequired,
  id: propTypes.string,
};

RateArticle.defaultProps = {
  userRating: '',
  id: '',
};

// selector function, adds props to RateArticle component
const mapStateToProps = state => ({
  userRating: state.rating.user_rating,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  addRating: rateArticle,
  aveRate: avgRate,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(RateArticle);
