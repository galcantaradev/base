import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEvent } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { fontSizeState } from '../../state';
import { ButtonProps } from '../Button';

export type ActionButtonProps = {
  children: string;
  icon: IconProp;
  onClick?: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
};

type StyledButtonProps = ButtonProps & {
  fontSize: number;
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${props => props.theme.backgroundColor};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  padding: 5px;

  svg {
    color: ${props => props.theme.textColor};
  }

  :hover,
  :focus {
    box-shadow: 0 0 0 1px ${props => props.theme.boxShadowHoverColor};
    outline: none;
  }

  :last-child {
    margin-right: 0;
  }

  p {
    background-color: ${props => props.theme.primary};
    border-radius: 4px;
    color: #fff;
    font-size: ${props => props.fontSize - 2}px;
    margin-left: -40px;
    margin-top: -20px;
    opacity: 0;
    padding: 4px;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.1s linear;
    visibility: hidden;
    z-index: 1;
  }

  :hover {
    p {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const ActionButton = ({
  children,
  icon,
  onClick
}: ActionButtonProps) => {
  const fontSize = useRecoilValue(fontSizeState);

  return (
    <StyledButton fontSize={fontSize} onClick={onClick} tabIndex={-1}>
      <p>{children}</p>
      <FontAwesomeIcon icon={icon} />
    </StyledButton>
  );
};
