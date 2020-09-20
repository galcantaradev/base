import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { themeState, toggledThemeState } from '../../state';

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
  const [theme, setTheme] = useRecoilState(themeState);
  const toggledTheme = useRecoilValue(toggledThemeState);

  return (
    <Container>
      <FontAwesomeIcon
        size="3x"
        icon={theme.id === 'dark_theme' ? 'moon' : 'sun'}
        onClick={() => setTheme(toggledTheme)}
        color={theme.id === 'dark_theme' ? 'white' : 'yellow'}
      />
    </Container>
  );
};
