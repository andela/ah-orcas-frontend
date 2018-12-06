import userConstants from '../constants/signup.constants';

export const initialState = {
  success: false,
  status: 'error',
  visible: false,
};

function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { };
    case userConstants.REGISTER_SUCCESS:
      return { success: true, status: 'success', visible: true };
    case userConstants.REGISTER_FAILURE:
      return { success: false, status: 'error', visible: false };
    default:
      return state;
  }
}

export default registration;
