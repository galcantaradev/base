import React, { ReactNode } from 'react';

export type FormGroupProps = {
  children: ReactNode;
  className?: string;
};

export const FormGroup = ({
  children,
  className = '',
  ...props
}: FormGroupProps) => {
  return (
    <div className={`form-group ${className}`} {...props}>
      {children}
    </div>
  );
};
