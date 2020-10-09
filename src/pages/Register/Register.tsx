import { Form, Formik } from 'formik';
import React from 'react';

import { Button, Container, FormikInputField } from '../../components';
import { useTheme } from '../../hooks';
import { registerValidationSchema } from './registerValidationSchema';

export const Register = () => {
  const { toggleTheme } = useTheme();

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
              <button type="button" onClick={toggleTheme}>
                toggle
              </button>
              <FormikInputField name="name" label="Name" width={400} />
              <Button>register</Button>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
};
