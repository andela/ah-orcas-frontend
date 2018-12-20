import { likeSuccess, dislikeSuccess, dislikesArticleActions, likesArticleActions } from '../likes.actions';
import likeConstants from '../../constants/likes.constants';


describe('likes action creators', () => {
  it('Should dispatch type LIKES_SUCESS', () => {
    expect(likeSuccess({}).type).toEqual(likeConstants.LIKES_SUCESS);
  });
  it('Should dispatch type DISLIKE_SUCESS', () => {
    expect(dislikeSuccess({}).type).toEqual(likeConstants.DISLIKE_SUCESS);
  });
});

describe('should dispatch dislikes article', () => {
  it('should expect something', () => {
    expect(dislikesArticleActions('slug')()).toHaveProperty('payload');
    dislikesArticleActions('slug')().payload.then((response) => {
      expect(response).toEqual({});
    });
  });
});

describe('should dispatch dislikes article', () => {
  it('should expect something', () => {
    expect(likesArticleActions('slug')()).toHaveProperty('payload');
    likesArticleActions('slug')().payload.then((response) => {
      expect(response).toEqual({});
    });
  });
});
