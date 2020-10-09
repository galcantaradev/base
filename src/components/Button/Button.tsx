import { lighten } from 'polished';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  ref?: any;
  width?: number;
};

const StyledButton = styled.button<ButtonProps>`
  background: ${props => props.theme.primary};
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  height: 36px;
  letter-spacing: 0.5px;
  padding: 0 16px;
  text-align: center;
  width: ${props => `${props.width}px`};

  :active {
    background: ${props => props.theme.primary};
    box-shadow: none;
  }

  :disabled {
    cursor: not-allowed;
    background: ${props => props.theme.disabledColor};
    color: ${props => props.theme.disabledTextColor};
  }

  :focus,
  :hover {
    background: ${props => lighten('.02', props.theme.primary)};
    box-shadow: 0 2px 8px 0 ${props => props.theme.shadowColor};
  }
`;

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return <StyledButton {...rest}>{children}</StyledButton>;
};
