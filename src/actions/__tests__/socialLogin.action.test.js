import SocialAuthAct, { socialSuccess } from '../sociallogin.action';

describe('actions', () => {
  it('it should create social login action', () => {
    const payload = {};
    const expectedAction = {
      type: 'SOCIAL_LOGIN_SUCCESS',
      payload,
    };
    expect(socialSuccess(payload)).toEqual(expectedAction);
  });
});

describe('should call api', () => {
  const socialData = { provider: 'google', access_token: 'jddcgvyd' };
  it('should expect an object with response', () => {
    SocialAuthAct(socialData);
  });
});
