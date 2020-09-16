import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { BaseThemeContext } from '../../providers';
import { UserActions } from '../../state/actions';

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
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(BaseThemeContext);

  useEffect(() => {
    dispatch(UserActions.setLoggedUser());
  }, [dispatch]);

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
