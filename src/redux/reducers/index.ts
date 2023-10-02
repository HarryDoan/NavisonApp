import * as constantsReducers from './combineReducers/constantsReducers';
import * as generalReducers from './combineReducers/generalReducers';
import * as mockReducers from './combineReducers/mockReducers';
import * as otherReducers from './combineReducers/otherReducers';
import * as tokenReducers from './combineReducers/tokenReducers';
import * as userReducers from './combineReducers/userReducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  ...generalReducers,
  ...userReducers,
  ...otherReducers,
  ...tokenReducers,
  ...constantsReducers,
  ...mockReducers,
});

export default rootReducer;
