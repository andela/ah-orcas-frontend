import axios from 'axios';
import { RATE_ARTICLE, RATE_FAILURE, AVERAGE_RATING } from '../constants/rating';

// const id = localStorage.getItem('article_id');

// action creator for rating an article
export const addRating = response => ({
  type: RATE_ARTICLE,
  response,
});

// action creator for failed rating
export const rateFail = response => ({
  type: RATE_FAILURE,
  response,
});

// action creator for average rating
export const averageRating = response => ({
  type: AVERAGE_RATING,
  response,
});

// fetch the average ratings for a specific article
// data is the article id
export const avgRate = data => (dispatch) => {
  const url = process.env.REACT_APP_URL;
  return axios.get(`${url}article/rate/${data}`)
    .then((response) => {
      const articleData = response.data.user.rates;
      dispatch(averageRating(articleData));
    });
};

// rate a given article provided its slug - dispatch rate article action
// update the average rating by dispatching the avgRate function
// id is the article id
export const rateArticle = (data, id) => (dispatch) => {
  const url = process.env.REACT_APP_URL;
  return axios.post(`${url}article/${data.slug}/rate/`, { user: data })
    .then((response) => {
      if (response.status === 200) {
        dispatch(addRating(data.rate));
        dispatch(avgRate(id));
      }
    })
    .catch((error) => {
      dispatch(rateFail(error.response.data.errors));
    });
};
