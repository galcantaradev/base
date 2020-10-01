import React, { ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className = '' }: ContainerProps) => {
  return <div className={`container ${className}`}>{children}</div>;
};
