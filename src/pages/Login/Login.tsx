import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

import { Button, Container, FormikInputField } from '../../components';
import { loginValidationSchema } from './loginValidationSchema';

type FormikLoginValues = {
  email: string;
  password: string;
};

const LoginContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const Login = () => {
  const login = (values: FormikLoginValues) => {};

  return (
    <Formik<FormikLoginValues>
      onSubmit={login}
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
