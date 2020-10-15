import * as Yup from 'yup';

export const profileValidationSchema = Yup.object().shape({
  name: Yup.string().required('name is required').trim(),
  password: Yup.string()
    .nullable()
    .test('password', 'password must be greater than 6', value => {
      if (value) {
        return value.length > 6;
      }

      return true;
    })
});
