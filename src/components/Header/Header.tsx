import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useAppSelector } from '../../slices/hooks';
import { SubstramLogo } from '../../content/logo';

const Header = () => {
  const [example, setExample] = useState('primary');
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
        {!isLoggedIn && (
          <Button variant="contained" color="secondary" href="/login">
            Login
          </Button>
        )}
      </StyledToolbar>
      
      <SubstramLogo />
    </StyledHeader>
  );
};
const StyledToolbar = styled(Toolbar)`

  & > * {
    align-items: center;
    margin-right: 10px;
  }
`;
const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin: 0 12px;
`;
export default Header;
