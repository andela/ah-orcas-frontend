import { combineReducers } from 'redux';
import SocialAuthReducer from './socialauthreducer';
import articles from './articles';
import loginReducer from './loginReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const rootReducer = combineReducers({
  articles,
  social: SocialAuthReducer,
  login: loginReducer,
});

export default rootReducer;
