import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

import { FlexContainer } from '../components';

const LoadingRoutesContainer = styled(FlexContainer)`
  align-items: center;
  color: ${props => props.theme.textColor};
  justify-content: center;
`;

export const LoadingRoutes = () => {
  return (
    <LoadingRoutesContainer>
      <FontAwesomeIcon icon="spinner" spin size="2x" />
    </LoadingRoutesContainer>
  );
};
