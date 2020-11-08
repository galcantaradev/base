import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

export type ActionsGroupProps = {
  children: ReactNode;
};

const StyledActionsGroup = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  float: right;
  padding: 3px 8px 3px 8px;
`;

export const ActionsGroup = ({ children }: ActionsGroupProps) => {
  return <StyledActionsGroup>{children}</StyledActionsGroup>;
};
