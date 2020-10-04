import { Form, Formik } from 'formik';
import React from 'react';

import { Button, FormikInputField } from '../../components';
import { useTheme } from '../../hooks';
import { registerValidationSchema } from './';

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
          <Form>
            <button type="button" onClick={toggleTheme}>
              toggle
            </button>
            <FormikInputField name="name" label="Name" />
            <Button>register</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
