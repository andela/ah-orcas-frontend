import { ADD_TAGS, REMOVE_TAGS, CLEAR_TAGS } from '../constants/articles';

let id = 0;

export const addTags = tag => (dispatch) => {
  id += 1;
  dispatch(
    {
      type: ADD_TAGS,
      id,
      payload: tag,
    },
  );
};

export const removeTags = actionId => (dispatch) => {
  dispatch(
    {
      type: REMOVE_TAGS,
      id: actionId,
    },
  );
};

export const clearTags = () => (dispatch) => {
  dispatch(
    {
      type: CLEAR_TAGS,
    },
  );
};
