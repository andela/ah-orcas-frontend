import { combineReducers } from 'redux';
import registration from './signup.reducer';
import alert from './alert.reducer';
import SocialAuthReducer from './socialauthreducer';
import articles from './articles';
import loginReducer from './loginReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
  articles,
  social: SocialAuthReducer,
  login: loginReducer,
  registration,
  alert,
});

export default allReducers;
