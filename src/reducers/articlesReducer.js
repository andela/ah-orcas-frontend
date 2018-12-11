import { GET_ARTICLES, ADD_TAGS, VIEW_ARTICLE, DELETE_ARTICLE, DELETE_ARTICLE_REQUEST, DELETE_ARTICLE_SUCCESS } from '../constants/articles';

const initialState = [];
const articleState = {};
const intialDeleteState = {
  isDeleting: false,
  deleted: false,
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


export const deleteArticle = (state = intialDeleteState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_REQUEST:
      return {
        ...initialState,
        isDeleting: false,
        deleted: false,
      };
    case DELETE_ARTICLE:
      return {
        ...initialState,
        isDeleting: true,
        deleted: false,
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...initialState,
        isDeleting: false,
        deleted: true,
      };
    default:
      return state;
  }
};
// export const articleDeleting = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_ARTICLE:
//       return {
//         ...initialState,
//         isDeleting: true,
//         deleted: false,
//       };
//     default:
//       return state;
//   }
// };

// export const articleDeleted = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_ARTICLE_SUCCESS:
//       return {
//         ...initialState,
//         isDeleting: false,
//         deleted: true,
//       };
//     default:
//       return state;
//   }
// };
