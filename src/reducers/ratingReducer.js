import { RATE_ARTICLE, RATE_FAILURE, AVERAGE_RATING } from '../constants/rating';

export const initialState = {
  user_rating: 0,
  average_rating: 0,
};

export default (state = initialState, { type, response }) => {
  switch (type) {
    case RATE_ARTICLE:
      return {
        ...state,
        user_rating: response,
      };

    case AVERAGE_RATING:
      return {
        ...state,
        average_rating: response,
      };

    case RATE_FAILURE:
      return {
        ...state,
        error: response,
      };

    default:
      return state;
  }
};
