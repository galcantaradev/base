import { User } from '../types';

export const getUserData = () => {
  const user: User = {
    id: '1',
    email: 'user@gmail.com'
  };

  return Promise.resolve({
    data: user
  });
};
