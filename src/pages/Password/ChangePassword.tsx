import * as React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { useHistory, useParams } from 'react-router';
import * as Yup from 'yup';

import {
  Button,
  CentralizedContainer,
  FormikInputField,
  SectionTitle
} from '../../components';
import {
  ChangePasswordInput,
  useChangePasswordMutation
} from '../../generated/graphql';
import { useNotification } from '../../hooks';
import { fieldErrorsToFormikErrors } from '../../utils';

type Params = {
  token: string;
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('password is required')
    .min(7, 'password must be greater than 6'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'passwords must match'
  )
});

const ChangePassword = () => {
  const history = useHistory();
  const { token } = useParams<Params>();
  const showNotification = useNotification();
  const [, changePassword] = useChangePasswordMutation();

  const onSubmit = async (
    values: ChangePasswordInput,
    actions: FormikHelpers<ChangePasswordInput>
  ) => {
    const { data } = await changePassword({ options: values, token });
    const errors = data?.changePassword.errors;

    if (errors) {
      const formikErrors = fieldErrorsToFormikErrors(errors);
      actions.setErrors(formikErrors);

      if ('token' in formikErrors) {
        showNotification({
          type: 'error',
          message: formikErrors.token
        });
      }

      return;
    }

    showNotification({
      type: 'success',
      message: 'password changed'
    });

    history.push('/');
  };

  return (
    <CentralizedContainer>
      <Formik<ChangePasswordInput>
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={{ password: '', passwordConfirmation: '' }}
      >
        {formProps => {
          return (
            <Form>
              <SectionTitle>change password</SectionTitle>
              <FormikInputField
                name="password"
                label="new password"
                placeholder="*******"
                type="password"
                width={400}
              />
              <FormikInputField
                name="passwordConfirmation"
                label="password confirmation"
                placeholder="*******"
                type="password"
                width={400}
              />
              <Button
                width={400}
                type="submit"
                variant="success"
                loading={formProps.isSubmitting}
              >
                confirm
              </Button>
            </Form>
          );
        }}
      </Formik>
    </CentralizedContainer>
  );
};

export default ChangePassword;
