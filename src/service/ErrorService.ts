import { ErrorInfo } from 'react';

export const log = (error: Error, errorInfo: ErrorInfo) => {
  console.log(error, errorInfo);
};
