import { Form, Formik } from 'formik';
import React from 'react';

import { Container, FormikInputField } from '../../components';
import { registerValidationSchema } from './';

export const Register = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={values => console.log(values)}
      validationSchema={() => registerValidationSchema}
    >
      {() => {
        return (
          <Container>
            <Form>
              <FormikInputField name="name" label="Name" />
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};
