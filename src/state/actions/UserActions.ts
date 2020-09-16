import { Dispatch } from 'redux';

import { UserService } from '../../service';
import { UserTypes } from '../types';

export const setLoggedUser = () => (dispatch: Dispatch): Promise<void> => {
  return UserService.getUserData().then(({ data }) => {
    const action = {
      type: UserTypes.SET_LOGGED_USER,
      payload: data
    };

    dispatch(action);
  });
};
