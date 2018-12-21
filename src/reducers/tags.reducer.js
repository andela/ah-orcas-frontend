import { ADD_TAGS, REMOVE_TAGS, CLEAR_TAGS } from '../constants/articles';

const initialState = [];


const tags = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAGS:
      return [...state,
        action.payload,
      ];
    case REMOVE_TAGS:
      return state.filter((tag, i) => i !== action.id);
    case CLEAR_TAGS: {
      const newState = state;
      newState.length = 0;
      return state; }
    default:
      return state;
  }
};

export default tags;
