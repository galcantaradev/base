import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { lighten } from 'polished';
import styled from 'styled-components';

import { ErrorMessage, FormGroup, Label } from '../';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  error?: string;
  width: number;
};

const StyledInput = styled.input<InputProps>`
  background: ${props => lighten('.07', props.theme.backgroundColor)};
  border-color: ${props => (!!props.error ? props.theme.errorColor : '')};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 2px 4px 4px 0 ${props => props.theme.shadowColor};
  color: ${props => (props.theme.themeId === 'dark_theme' ? '#fff' : '#000')};
  height: 36px;
  padding: 10px;
  width: ${props => props.width}px;

  :disabled {
    background: ${props => props.theme.disabledColor};
    color: ${props => props.theme.disabledTextColor};
    cursor: not-allowed;
  }

  :focus {
    border-color: ${props =>
      props.theme.themeId === 'dark_theme' ? '#fff' : '#000'};
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
