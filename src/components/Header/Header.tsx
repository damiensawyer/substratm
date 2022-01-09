import { Button, Chip } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import { useAppSelector } from '../../slices/hooks';
import { SubstramLogo } from '../../content/logo';
import MetamaskLogin from '../MetamaskLogin/MetamaskLogin';

const Header = () => {
  const isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);

  return (
    <StyledHeader>
      <SubstramLogo />
      <StyledToolbar>
        <Button component={Link} to="/about" color="secondary" href="/about">
          About
        </Button>
        <Button
          component={Link}
          to="/projects"
          color="secondary"
          href="/projects"
        >
          Projects
        </Button>
        <Button
          component={Link}
          to="/socialwall"
          color="secondary"
          href="/socialwall"
        >
          Social&nbsp;Wall
        </Button>
        <MetamaskLogin />
      </StyledToolbar>
    </StyledHeader>
  );
};

const StyledToolbar = styled(Toolbar)`
  & > * {
    align-items: center;
    margin-right: 10px;
    min-width: calc(50% / 3);
    max-height: 50%;
  }
`;

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  & > * {
    min-width: calc(100% / 2);
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export default Header;
