import React from 'react';
import styled from 'styled-components';

import { FlexContainer, SectionTitle } from '../../components';

const HomeContainer = styled(FlexContainer)`
  align-items: center;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <SectionTitle style={{ marginTop: 10 }}>home</SectionTitle>
    </HomeContainer>
  );
};
