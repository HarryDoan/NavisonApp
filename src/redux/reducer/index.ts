import * as userReducers from './combineReducers/userReducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  ...userReducers,
});

export default rootReducer;
