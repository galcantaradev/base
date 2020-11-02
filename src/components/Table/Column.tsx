import { ReactNode } from 'react';

export type ColumnProps<T> = {
  header?: ReactNode;
  data: (value: T) => ReactNode;
};

export const Column = <T extends any>(props: ColumnProps<T>) => {
  return null;
};
