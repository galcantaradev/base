import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  hasError?: boolean;
};

const StyledInput = styled.input<InputProps>`
  border-color: ${props =>
    !props.hasError ? props.theme.borderColor : props.theme.errorColor};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 2px 4px 4px 0 ${props => props.theme.shadowColor};
  height: 36px;
  padding: 10px;
`;

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};
