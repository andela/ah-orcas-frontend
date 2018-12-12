
import axios from 'axios';
import { GET_ARTICLES, ADD_ARTICLE, ADD_TAGS, VIEW_ARTICLE } from '../constants/articles';
import baseUrl from '../constants/url';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDUxMTUwNDksImlhdCI6MTU0NDUxMDI0OSwiaWQiOjUxfQ.sdJ8mdTXaxB4JPMUPNvC63x4uLiHMObFq4kdODHm5iA';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getAllArticles = () => (dispatch) => {
  axios.get(`${baseUrl}/article/`)
    .then((articles) => {
      articles.data.results.map((article) => {
        if (!article.image) {
          article.image = 'https://picsum.photos/50/100/?random';
        }
      });
      dispatch({
        type: GET_ARTICLES,
        payload: articles.data.results,
      });
    });
};

export const postArticle = data => (dispatch) => {
  axios.post(`${baseUrl}/article/create`, data).then((article) => {
    dispatch(
      {
        type: ADD_ARTICLE,
        payload: article.data,
      },
    );
  }).catch((error) => {
    console.error(error.response);
  });
};

export const viewSingleArticle = slug => (dispatch) => {
  const url = `${baseUrl}/article/detail/${slug}/`;
  axios.get(url).then((article) => {
    dispatch({
      type: VIEW_ARTICLE,
      article: article.data,
    },
    );
  }).catch((error) => {
    console.error(error.message);
  });
};

// const ID = 0;
// export const addTags = tag => ({
//   type: ADD_TAGS,
//   id: ID + 1,
//   tag,
// });
