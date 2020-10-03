import { useField } from 'formik';
import React, { useMemo } from 'react';

import { ErrorMessage, FormGroup, Input, InputProps, Label } from '../';

export type FormikInputFieldProps = InputProps & {
  fast?: boolean;
};

export const FormikInputField = (props: FormikInputFieldProps) => {
  const [field, meta] = useField(props);

  const hasError = useMemo(() => meta.touched && !!meta.error, [
    meta.touched,
    meta.error
  ]);

  return (
    <FormGroup>
      <Label htmlFor={field.name}>{props.label}</Label>
      <Input
        {...props}
        {...field}
        hasError={hasError}
        data-testid={`testid-${field.name}`}
      />
      {hasError ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </FormGroup>
  );
};
