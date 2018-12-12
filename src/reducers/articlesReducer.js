import { GET_ARTICLES, ADD_TAGS, VIEW_ARTICLE } from '../constants/articles';

const initialState = [];
const articleState = {
  title: 'hello',
};

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};

export const viewarticle = (state = articleState, action) => {
  switch (action.type) {
    case VIEW_ARTICLE:
      return action.article;
    default:
      return state;
  }
};

export const tags = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAGS:
      return [...state, {
        tag: action.tag,
        id: action.id,
      }];
    default:
      return state;
  }
};
