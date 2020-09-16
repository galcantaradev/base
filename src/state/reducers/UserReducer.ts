import { AnyAction } from 'redux';

import { User } from '../../types';
import { UserTypes } from '../types';

export type UserReducerType = {
  loggedUser: User;
};

const initialState: UserReducerType = {
  loggedUser: {
    id: '',
    email: ''
  }
};

const UserReducer = (
  state = initialState,
  action: AnyAction
): UserReducerType => {
  switch (action.type) {
    case UserTypes.SET_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload
      };

    default:
      return state;
  }
};

export { UserReducer };
