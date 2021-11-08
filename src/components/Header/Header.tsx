import React, { useState } from 'react';
import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useAppSelector } from '../../slices/hooks';
import { SubstramLogo } from '../../content/logo';
import MetamaskLogin from '../MetamaskLogin/MetamaskLogin';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
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
      <MobileNav />
      <SubstramLogo />
    </StyledHeader>
  );
};
const MobileNav = () => {
  return (
    <StyledHamburgerMenu>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu open={true}>
        <StyledMenuItem>asdf</StyledMenuItem>
      </Menu>
    </StyledHamburgerMenu>
  );
};
const StyledHamburgerMenu = styled.div`
  // display: none;
  // & > * {
  //   display: none;
  // }
`;
const StyledMenuItem = styled(MenuItem)``;
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
  // margin: 0 12px;
`;
export default Header;
