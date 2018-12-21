import { reportActions, REPORT_USER } from '../report.actions';

describe('should dispatch report actions', () => {
  it('should expect something', () => {
    const data = { title: 'this', body: 'this is a test' };
    expect(reportActions(data).payload.then((response) => {
      expect(response).toEqual({});
    }),
    );
  },
  );
},
);

describe('likes action creators', () => {
  it('Should dispatch type LIKES_SUCESS', () => {
    expect(REPORT_USER({}).type).toEqual('REPORT_USER_PROFILE');
  });
});
