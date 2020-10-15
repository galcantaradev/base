import { Form, Formik, FormikHelpers } from 'formik';
import { History } from 'history';
import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import {
  Button,
  FlexContainer,
  FormikInputField,
  SectionTitle
} from '../../components';
import {
  UserLoginInput,
  useLoginMutation,
  useMeQuery
} from '../../generated/graphql';
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
  const [{ data }] = useMeQuery();

  if (data?.me) {
    return <Redirect to="logged-in" />;
  }

  const onSubmit = async (
    options: UserLoginInput,
    actions: FormikHelpers<UserLoginInput>
  ) => {
    const { data } = await login({ options });
    const errors = data?.login.errors;

    if (errors) {
      const formikErrors = fieldErrorsToFormikErrors(errors);
      actions.setErrors(formikErrors);

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
              <SectionTitle>login</SectionTitle>
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
                placeholder="*******"
              />
              <Button
                width={400}
                type="submit"
                loading={formProps.isSubmitting}
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
