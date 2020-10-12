import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeSwitcher } from '../../components';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';
import { useTheme } from '../../hooks';

const StyledNav = styled.nav`
  background-color: ${props => props.theme.primary};
  color: #fff;
  padding: 10px;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  > a {
    padding: 10px;
    position: absolute;

    :hover {
      text-decoration: none;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    height: 35px;
    justify-content: flex-end;

    li {
      cursor: pointer;
      margin: 10px;
    }
  }
`;

export const NavBar = () => {
  const [{ data }] = useMeQuery();
  const [, logout] = useLogoutMutation();
  const { push } = useHistory();
  const { theme, toggleTheme } = useTheme();

  let body = null;

  if (data?.me) {
    body = (
      <>
        <li>{data?.me.name}</li>
        <li onClick={() => logout().then(() => push('/'))}>logout</li>
      </>
    );
  } else {
    body = (
      <>
        <li>
          <Link to="login">login</Link>
        </li>
        <li>
          <Link to="register">register</Link>
        </li>
      </>
    );
  }

  return (
    <StyledNav>
      <Link to="/">base</Link>
      <ul>
        <li>
          <ThemeSwitcher
            name="theme"
            checked={theme.id === 'dark_theme'}
            onClick={toggleTheme}
          />
        </li>
        {body}
      </ul>
    </StyledNav>
  );
};
