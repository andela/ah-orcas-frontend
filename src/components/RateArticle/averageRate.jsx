import React from 'react';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

// average ratings component
const AverageRate = ({ rates }) => (
  <div className="aveRatings">
    <StarRatings
      rating={rates}
      starDimension="20px"
      starSpacing="5px"
      starRatedColor="gold"
    />
  </div>
);

// propTypes validation
AverageRate.propTypes = {
  rates: propTypes.number,
};

AverageRate.defaultProps = {
  rates: 0,
};

// selector function, adds props to average ratings component
const mapStateToProps = state => ({
  averageRating: state.rating.average_rating,
});

export default connect(mapStateToProps, null)(AverageRate);
