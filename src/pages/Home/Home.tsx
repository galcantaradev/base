import * as React from 'react';
import styled from 'styled-components';

import { FlexContainer, SectionTitle } from '../../components';
import { useNotification } from '../../hooks';

const HomeContainer = styled(FlexContainer)`
  align-items: center;
`;

const Home = () => {
  const showNotification = useNotification();
  return (
    <HomeContainer>
      <SectionTitle
        style={{ marginTop: 10 }}
        onClick={() =>
          showNotification({
            type: 'success',
            message: 'test'
          })
        }
      >
        home
      </SectionTitle>
    </HomeContainer>
  );
};

export default Home;
