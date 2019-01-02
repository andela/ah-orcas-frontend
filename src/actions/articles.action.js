import axios from 'axios';
import { GET_ARTICLES,
  ADD_ARTICLE, VIEW_ARTICLE,
  DELETE_ARTICLE,
  DELETE_ARTICLE_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE } from '../constants/articles';
import baseUrl from '../constants/url';
import { avgRate } from './ratings.actions';

const provideToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) { const { token } = user; axios.defaults.headers.common.Authorization = `Bearer ${token}`; }
};

export const getAllArticles = () => (dispatch) => {
  axios.get(`${baseUrl}article/`)
    .then((articles) => {
      articles.data.results.map((article) => {
        const newArticle = article;
        if (!newArticle.image) {
          newArticle.image = 'https://picsum.photos/50/100/?random';
        }
        return newArticle;
      });
      dispatch({
        type: GET_ARTICLES,
        payload: articles.data.results,
      });
    });
};

export const postArticle = (data, cleardata, handleError) => (dispatch) => {
  provideToken();
  axios.post(`${baseUrl}article/create`, data).then((article) => {
    dispatch(
      {
        type: ADD_ARTICLE,
        payload: article.data,
      },
    );
    cleardata();
    setTimeout(() => {
      window.location.assign(process.env.REACT_APP_FRONTEND_URL);
    }, 3000);
  }).catch(() => {
    handleError();
  });
};


export const viewSingleArticle = slug => (dispatch) => {
  provideToken();
  const url = `${baseUrl}article/detail/${slug}/`;
  axios.get(url).then((article) => {
    dispatch(
      {
        type: VIEW_ARTICLE,
        payload: article.data,
      },
    );
    // dispatch the average ratings function
    // displays the average ratings when the article component mounts
    dispatch(avgRate(article.data.id));
  }).catch(() => {
  });
};

export const deleteArticle = () => (
  {
    type: DELETE_ARTICLE,
  }
);

export const deleteArticleFailure = response => (
  {
    type: DELETE_ARTICLE_FAILURE,
    payload: response,
  }
);

export const deleteArticleSuccess = response => (
  {
    type: DELETE_ARTICLE_SUCCESS,
    payload: response,
  }
);

export const deleteArticleApi = (slug) => {
  provideToken();
  const url = `${baseUrl}article/delete/${slug}/`;
  return (dispatch) => {
    dispatch(deleteArticle());
    return axios.delete(url).then(
      (response) => {
        dispatch(deleteArticleSuccess(response));
        setTimeout(() => {
          window.location.assign(process.env.REACT_APP_FRONTEND_URL);
        }, 1000);
      },
      (err) => {
        dispatch(deleteArticleFailure(err.response));
        setTimeout(() => {
          window.location.assign(process.env.REACT_APP_FRONTEND_URL);
        }, 3000);
      },
    );
  };
};

export const updateArticle = (data, slug, handleError, handleSuccess) => (dispatch) => {
  provideToken();
  const url = `${baseUrl}article/update/${slug}/`;
  axios.put(url, data).then((article) => {
    dispatch({
      type: UPDATE_ARTICLE,
      payload: article.data,
    });
    handleSuccess();
    setTimeout(() => {
      window.location.assign(`${process.env.REACT_APP_FRONTEND_URL}article/detail/${slug}`);
    }, 3000);
  }).catch(() => {
    handleError();
  });
};
