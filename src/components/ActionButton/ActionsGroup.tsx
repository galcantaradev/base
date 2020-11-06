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
  padding: 3px 8px 3px 8px;
`;

export const ActionsGroup = ({ children }: ActionsGroupProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};
