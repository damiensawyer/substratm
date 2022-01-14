import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import { Button, Chip } from '@mui/material';

import { useAppSelector } from '../../slices/hooks';
import { SubstramLogo } from '../../content/logo';
import MetamaskLogin from '../MetamaskLogin/MetamaskLogin';

const Header = () => {
  const isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);

  return (
    <StyledHeader>
      <SubstramLogo />
      <StyledToolbar>
        {isLoggedIn && (
          // https://stackoverflow.com/a/51642640/494635
          <Button component={Link} to="/home" color="secondary" href="/home">
            Home
          </Button>
        )}

        {isLoggedIn && (
          <Button component={Link} to="/about" color="secondary" href="/home">
            About
          </Button>
        )}

        {isLoggedIn && (
          <Button
            component={Link}
            to="/scratchpad"
            color="secondary"
            href="/scratchpad"
          >
            Create Profile
          </Button>
        )}
        {/* TODO: these are the new buttons leaving them commented out to come back to it later
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
        </Button> */}
        <MetamaskLogin />
      </StyledToolbar>
    </StyledHeader>
  );
};
const StyledButton = styled(Button)`
  height: 65px;
  width: 170px;
`;
const StyledToolbar = styled(Toolbar)`
  & > * {
    align-items: center;
    margin-right: 10px;
    // min-width: calc(50% / 3);
    // max-height: 50%;
    height: 65px;
    width: 170px;
  }
`;

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export default Header;
