import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { useTheme } from '../../hooks';

const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <FontAwesomeIcon
        size="3x"
        icon={theme.id === 'dark_theme' ? 'moon' : 'sun'}
        onClick={toggleTheme}
        color={theme.id === 'dark_theme' ? 'white' : 'yellow'}
      />
    </Container>
  );
};
