import likesReducer, { initialState } from '../likeReducer';
import likeConstants from '../../constants/likes.constants';

describe('like reducers', () => {
  it('should provide the initial state', () => {
    expect(likesReducer(undefined, {})).toEqual(initialState);
  });

  it('should add likes to the state', () => {
    expect(likesReducer(initialState, {})).toEqual(initialState);
  });

  it('should set like state', () => {
    expect(likesReducer(initialState, { type: likeConstants.LIKES_SUCESS })
      .success).toEqual(undefined);
  });

  it('should set sdislike state', () => {
    expect(likesReducer(initialState, { type: likeConstants.DISLIKE_SUCESS, payload: {} })
      .success).toEqual(undefined);
  });
});
