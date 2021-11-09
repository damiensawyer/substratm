import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { Toolbar } from '@material-ui/core';
import { useAppSelector } from '../../slices/hooks';
import { SubstramLogo } from '../../content/logo';
import MetamaskLogin from '../MetamaskLogin/MetamaskLogin';

const Header = () => {
  const isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);

  return (
    <StyledHeader>
      <StyledToolbar>
        {isLoggedIn && (
          <Button variant="contained" color="secondary" href="/home">
            Home
          </Button>
        )}
        {isLoggedIn && (
          <Button variant="contained" color="secondary" href="/about">
            About
          </Button>
        )}
        <MetamaskLogin />
      </StyledToolbar>

      <SubstramLogo />
    </StyledHeader>
  );
};

const StyledToolbar = styled(Toolbar)`
  & > * {
    align-items: center;
    margin-right: 10px;
    min-width: calc(100% / 3);
    max-height: 50%;
  }
`;

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
export default Header;
