import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export type ErrorMessageProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  children: ReactNode;
  ref?: any;
};

const StyledErrorMessage = styled.small<ErrorMessageProps>`
  color: ${props => props.theme.errorColor};
  font-size: 12px;
  margin-top: 8px;
`;

export const ErrorMessage = ({ children, ...props }: ErrorMessageProps) => {
  return <StyledErrorMessage {...props}>{children}</StyledErrorMessage>;
};
