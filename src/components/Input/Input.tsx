import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { ErrorMessage, FormGroup, Label } from '../';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  error?: string;
  width: number;
};

const StyledInput = styled.input<InputProps>`
  border-color: ${props =>
    !!props.error ? props.theme.errorColor : props.theme.defaultBorderColor};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 2px 4px 4px 0 ${props => props.theme.shadowColor};
  height: 36px;
  padding: 10px;
  width: ${props => props.width}px;

  :disabled {
    background: ${props => props.theme.disabledColor};
    color: ${props => props.theme.disabledTextColor};
    cursor: not-allowed;
  }

  :focus {
    border-color: ${props => props.theme.primary};
    outline: none;
  }
`;

export const Input = (props: InputProps) => {
  const { name, label, error, ...rest } = props;

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput name={name} error={error} {...rest} />
      {!!error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </FormGroup>
  );
};
