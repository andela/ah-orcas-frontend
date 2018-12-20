import likeConstants from '../constants/likes.constants';

export const initialState = {
  likes: 0,
  dislikes: 0,
};

const likesReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case likeConstants.LIKES_SUCESS:
      return {
        ...state,
        likes: action.count,
      };
    case likeConstants.DISLIKE_SUCESS:
      return {
        ...state,
        dislikes: action.count,
      };
    default:
      return state;
  }
};
export default likesReducer;
