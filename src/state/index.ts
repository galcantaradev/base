import { combineReducers } from 'redux';

import { BaseReducer } from '../types';
import { UserReducer } from './reducers';

export default combineReducers<BaseReducer>({
  user: UserReducer
});
