import * as React from 'react';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export type ThemeSwitcherProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const StyledSwitch = styled.input`
  display: none;

  :checked ~ label::after {
    left: 26px;
  }
`;

const StyledLabel = styled.label`
  align-items: center;
  background-color: #ddd;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: space-between;
  padding: 2px;
  position: relative;
  width: 45px;

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

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <>
      <StyledSwitch
        {...props}
        id={props.name}
        type="checkbox"
        onChange={handleChange}
      />
      <StyledLabel htmlFor={props.name}>
        <FontAwesomeIcon icon="moon" color="#f1c40f" />
        <FontAwesomeIcon icon="sun" color="#f1c40f" />
      </StyledLabel>
    </>
  );
};
