import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type ActionsGroupProps = {
  children: ReactNode;
};

const StyledDiv = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  float: right;
  padding-right: 2px;
`;

export const ActionsGroup = ({ children }: ActionsGroupProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};
