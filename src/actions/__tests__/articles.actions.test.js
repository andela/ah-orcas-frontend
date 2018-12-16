import { ADD_ARTICLES } from '../../constants';
import { postArticle } from '../articles.action';

describe('Article action creators', () => {
  it('Should dispatch ADD_ARTICLE type', () => {
    expect(postArticle({}).type).toEqual(ADD_ARTICLES);
  });
});
