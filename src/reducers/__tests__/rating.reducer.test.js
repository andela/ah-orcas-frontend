import rating, { initialState } from '../ratingReducer';
import { RATE_ARTICLE, RATE_FAILURE, AVERAGE_RATING } from '../../constants/rating';


describe('Signup reducers', () => {
  it('should provide the initial state', () => {
    expect(rating(undefined, {})).toEqual(initialState);
  });

  it('should set rate article success', () => {
    expect(rating(initialState, { type: RATE_ARTICLE, response: '' }).user_rating).toEqual('');
  });

  it('should set average rate for successful article rate', () => {
    expect(rating(initialState, { type: AVERAGE_RATING, response: '' }).average_rating).toEqual('');
  });

  it('should set rate article failure', () => {
    expect(rating(initialState, { type: RATE_FAILURE, response: '' }).average_rating).toEqual(0);
  });
});
