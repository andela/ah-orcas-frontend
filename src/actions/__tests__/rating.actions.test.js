import { RATE_ARTICLE, RATE_FAILURE, AVERAGE_RATING } from '../../constants/rating';

import {
  addRating, rateArticle, rateFail, averageRating, avgRate,
} from '../ratings.actions';


describe('Rating action creators', () => {
  it('Should dispatch RATE_ARTICLE type', () => {
    expect(addRating({}).type).toEqual(RATE_ARTICLE);
  });
  it('Should dispatch RATE_FAILURE type', () => {
    expect(rateFail({}).type).toEqual(RATE_FAILURE);
  });
  it('should dispatch AVERAGE_RATING type', () => {
    expect(averageRating({}).type).toEqual(AVERAGE_RATING);
  });
});

describe('should dispatch rate article', () => {
  it('should expect an object with response', () => {
    rateArticle({ slug: 'will-it-rain' })().then((res) => {
      expect(res).toEqual({});
    });
  });
});

describe('should dispatch fetch average rate of an article', () => {
  it('should expect an object with response', () => {
    avgRate({ id: 0 })().then((res) => {
      expect(res).toEqual({});
    });
  });
});

describe('Rate article actions', () => {
  it('should create rate article action', () => {
    const response = 'create rate article';
    const expectedAction = {
      type: RATE_ARTICLE,
      response,
    };
    expect(addRating(response)).toEqual(expectedAction);
  });
});
