import { UserService } from '../';

describe('UserService.test.tsx', () => {
  it('getUserData', async () => {
    expect.assertions(1);

    const res = await UserService.getUserData();
    const expectedUser = {
      id: '1',
      email: 'user@gmail.com'
    };

    expect(res.data).toEqual(expectedUser);
  });
});
