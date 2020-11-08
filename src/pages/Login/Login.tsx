import * as React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { History } from 'history';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Button,
  FlexContainer,
  FormikInputField,
  SectionTitle
} from '../../components';
import { UserLoginInput, useLoginMutation } from '../../generated/graphql';
import { fieldErrorsToFormikErrors } from '../../utils';

type Props = {
  history: History;
};

const LoginContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    color: ${props => props.theme.textColor};
    margin-bottom: 15px;
    margin-top: -14px;
    text-decoration: none;
  }
`;

export const Login = ({ history }: Props) => {
  const [, login] = useLoginMutation();

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
              <LinkContainer>
                <Link to="/forgot-password">forgot password?</Link>
              </LinkContainer>
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
