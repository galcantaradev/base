import { Form, Formik, FormikHelpers } from 'formik';
import { History } from 'history';
import React from 'react';
import styled from 'styled-components';

import { Button, FlexContainer, FormikInputField } from '../../components';
import { UserLoginInput, useLoginMutation } from '../../generated/graphql';
import { fieldErrorsToFormikErrors } from '../../utils';
import { loginValidationSchema } from './loginValidationSchema';

type Props = {
  history: History;
};

const LoginContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
`;

export const Login = ({ history }: Props) => {
  const [, login] = useLoginMutation();

  const onSubmit = async (
    options: UserLoginInput,
    actions: FormikHelpers<UserLoginInput>
  ) => {
    const { data } = await login({ options });

    if (data?.login.errors) {
      actions.setErrors(fieldErrorsToFormikErrors(data?.login.errors));
      return;
    }

    history.push('/');
  };

  return (
    <LoginContainer>
      <Formik<UserLoginInput>
        onSubmit={onSubmit}
        initialValues={{ email: '', password: '' }}
        validationSchema={() => loginValidationSchema}
      >
        {formProps => {
          return (
            <Form>
              <FormikInputField
                width={400}
                name="email"
                type="email"
                label="email"
                placeholder="example@email.com"
              />
              <FormikInputField
                width={400}
                name="password"
                type="password"
                label="password"
                placeholder="******"
              />
              <Button
                width={400}
                type="submit"
                loading={formProps.isSubmitting}
                onClick={formProps.submitForm}
              >
                login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </LoginContainer>
  );
};
