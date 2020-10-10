import { Form, Formik, FormikHelpers } from 'formik';
import { History } from 'history';
import React from 'react';
import styled from 'styled-components';

import { Button, Container, FormikInputField } from '../../components';
import { UserLoginInput, useLoginMutation } from '../../generated/graphql';
import { fieldErrorsToFormikErrors } from '../../utils';
import { loginValidationSchema } from './loginValidationSchema';

type Props = {
  history: History;
};

const LoginContainer = styled(Container)`
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
    <Formik<UserLoginInput>
      onSubmit={onSubmit}
      initialValues={{ email: '', password: '' }}
      validationSchema={() => loginValidationSchema}
    >
      {formProps => {
        return (
          <LoginContainer>
            <Form>
              <FormikInputField
                width={400}
                name="email"
                type="email"
                label="email"
              />
              <FormikInputField
                name="password"
                type="password"
                label="password"
                width={400}
              />
              <Button type="submit" onClick={formProps.submitForm} width={400}>
                login
              </Button>
            </Form>
          </LoginContainer>
        );
      }}
    </Formik>
  );
};
