import reducer from '../tags.reducer';

const initialState = [];
const payload = '';

describe('test tags reducer', () => {
  it('should return the initial tag state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should hande diaspatch of ADD_TAGS', () => {
    expect(reducer(initialState, {
      type: 'ADD_TAGS',
      payload,
    })).toEqual([payload]);
  });
  it('should handle dispatch of REMOVE_TAGS', () => {
    expect(reducer(initialState, {
      type: 'REMOVE_TAGS',
      payload,
    })).toEqual([]);
  });
});
