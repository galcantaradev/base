import * as React from 'react';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export type FormGroupProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  ref?: any;
  children: ReactNode;
};

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FormGroup = ({ children, ...props }: FormGroupProps) => {
  return <StyledFormGroup {...props}>{children}</StyledFormGroup>;
};
