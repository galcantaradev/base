import { ErrorInfo } from 'react';

export const log = (error: Error, errorInfo: ErrorInfo) => {
  //eslint-disable-next-line
  console.log(error, errorInfo);
};
