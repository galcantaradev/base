import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { CentralizedContainer } from '../../components';

export type ErrorPageContainerProps = {
  children: ReactNode;
};

const StyledErrorPageContainer = styled(CentralizedContainer)`
  font-size: 30px;
`;

export const ErrorPageContainer = ({ children }: ErrorPageContainerProps) => {
  return <StyledErrorPageContainer>{children}</StyledErrorPageContainer>;
};
