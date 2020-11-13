import styled from 'styled-components';

import { FlexContainer } from './FlexContainer';

export const CentralizedContainer = styled(FlexContainer)`
  align-items: center;
  color: ${props => props.theme.textColor};
  justify-content: center;
`;
