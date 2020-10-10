import { FieldError } from '../generated/graphql';

export const fieldErrorsToFormikErrors = (
  errors: FieldError[]
): Record<string, string> => {
  const formikErrors: Record<string, string> = {};

  errors.forEach(error => {
    formikErrors[error.field] = error.message;
  });

  return formikErrors;
};
