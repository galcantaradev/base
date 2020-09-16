import React, { ReactNode } from 'react';

export type RowProps = {
  className?: string;
  children: ReactNode;
};

export const Row = ({ children, className = '', ...props }: RowProps) => {
  return (
    <div className={`row ${className}`} {...props}>
      {children}
    </div>
  );
};
