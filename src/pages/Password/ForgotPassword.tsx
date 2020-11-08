import * as React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { Button, FormikInputField, SectionTitle } from '../../components';
import { useForgotPasswordMutation } from '../../generated/graphql';
import { useNotification } from '../../hooks';
import { fieldErrorsToFormikErrors } from '../../utils';
import { PasswordContainer } from './PasswordContainer';

type ForgotPasswordInput = {
  email: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('email is invalid').required('email is required')
});

export const ForgotPassword = () => {
  const showNotification = useNotification();
  const [, forgotPassword] = useForgotPasswordMutation();

  const onSubmit = async (
    options: ForgotPasswordInput,
    actions: FormikHelpers<ForgotPasswordInput>
  ) => {
    const { data } = await forgotPassword({ email: options.email });
    const errors = data?.forgotPassword?.errors;

    if (errors) {
      const formikErrors = fieldErrorsToFormikErrors(errors);
      actions.setErrors(formikErrors);

      return;
    }

    showNotification({
      type: 'success',
      message: `an email has been sent to ${options.email}`
    });
  };

  return (
    <PasswordContainer>
      <Formik<ForgotPasswordInput>
        onSubmit={onSubmit}
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
      >
        {formProps => {
          return (
            <Form>
              <SectionTitle>forgot password</SectionTitle>
              <FormikInputField
                width={400}
                name="email"
                label="email"
                placeholder="example@email.com"
              />
              <Button
                width={400}
                type="submit"
                loading={formProps.isSubmitting}
              >
                send
              </Button>
            </Form>
          );
        }}
      </Formik>
    </PasswordContainer>
  );
};
