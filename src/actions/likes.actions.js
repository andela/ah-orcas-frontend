import api from '../api';

import likeConstants from '../constants/likes.constants';

export const likeSuccess = count => ({
  type: likeConstants.LIKES_SUCESS,
  count: count.response,
});

export const dislikeSuccess = count => ({
  type: likeConstants.DISLIKE_SUCESS,
  count: count.response,
});

export const likesGet = slug1 => dispatch => ({
  payload: api({
    url: `/article/like/${slug1}/`,
    method: 'GET',
  })
    .then(response => dispatch(likeSuccess(response.data))),
});

export const dislikesGet = slug1 => dispatch => ({
  payload: api({
    url: `/article/dislike/${slug1}/`,
    method: 'GET',
  })
    .then(response => dispatch(dislikeSuccess(response.data))),
});

export const dislikesArticleActions = slug1 => dispatch => ({
  payload: api({
    url: `/article/dislike/${slug1}/`,
    method: 'POST',
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(likesGet(slug1));
        dispatch(dislikesGet(slug1));
      }
    }).catch(() => {
      window.location.assign(`${process.env.REACT_APP_FRONTEND_URL}/login`);
    }),
});

export const likesArticleActions = slug1 => dispatch => ({
  payload: api({
    url: `/article/like/${slug1}/`,
    method: 'POST',
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(likesGet(slug1));
        dispatch(dislikesGet(slug1));
      }
    }).catch(() => {
      window.location.assign(`${process.env.REACT_APP_FRONTEND_URL}/login`);
    }),
});
