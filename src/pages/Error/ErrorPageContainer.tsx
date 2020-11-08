import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { FlexContainer } from '../../components';

export type ErrorPageContainerProps = {
  children: ReactNode;
};

const StyledErrorPageContainer = styled(FlexContainer)`
  align-items: center;
  color: ${props => props.theme.textColor};
  font-size: 30px;
  justify-content: center;
`;

export const ErrorPageContainer = ({ children }: ErrorPageContainerProps) => {
  return <StyledErrorPageContainer>{children}</StyledErrorPageContainer>;
};
