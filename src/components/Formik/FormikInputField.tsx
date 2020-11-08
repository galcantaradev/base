import * as React from 'react';
import { useMemo } from 'react';
import { useField } from 'formik';

import { Input, InputProps } from '../';

export type FormikInputFieldProps = InputProps;

export const FormikInputField = (props: FormikInputFieldProps) => {
  const [field, meta] = useField(props);

  const hasError = useMemo(() => meta.touched && !!meta.error, [
    meta.touched,
    meta.error
  ]);

  return (
    <Input
      {...props}
      {...field}
      error={hasError ? meta.error : ''}
      data-testid={`testid-${field.name}`}
    />
  );
};
