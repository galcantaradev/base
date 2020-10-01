import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const StyledInput = styled.input<InputProps>``;

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};
