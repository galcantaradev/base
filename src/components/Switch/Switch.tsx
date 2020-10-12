import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const StyledSwitch = styled.input`
  display: none;

  :checked ~ label {
    background-color: ${props => props.theme.successColor};
  }

  :checked ~ label::after {
    left: 20px;
  }
`;

const StyledLabel = styled.label`
  background-color: #ddd;
  border-radius: 20px;
  cursor: pointer;
  display: inline-block;
  height: 20px;
  position: relative;
  width: 40px;

  :after {
    background-color: white;
    border-radius: 50%;
    content: '';
    height: 18px;
    left: 1px;
    position: absolute;
    top: 1px;
    transition: all 0.3s;
    width: 18px;
  }
`;

export const Switch = (props: SwitchProps) => {
  return (
    <>
      <StyledSwitch {...props} id={props.name} type="checkbox" />
      <StyledLabel htmlFor={props.name} />
    </>
  );
};
