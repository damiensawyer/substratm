import React from 'react';
import logo from './substratmlogo.png';
import logobanner from './logobanner.png';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { useAppDispatch } from '../slices/hooks';
import { tapLogoForDevMode as tapLogoForDevMode } from '../slices/devMode.slice';
import { Console } from 'console';

export const imageClick = () => {
  console.log('Click!!!!');
};

export const Logo = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledLogo
      src={logo}
      className="App-logo"
      alt="logo"
      onClick={() => dispatch(tapLogoForDevMode())}
    />
  );
};

export const SubstramLogo = () => {
  const dispatch = useAppDispatch();
  return <StyledTypographyLogo>SUBSTRATM</StyledTypographyLogo>;
};

const StyledTypographyLogo = styled.div`
  display: flex;
  font-family: 'Comfortaa', cursive;
  width: 24vw;
  padding 0 24px;
`;
const StyledLogo = styled.img`
  height: 40vmin;
`;

const LogoBanner = styled.img`
  height: 6vmin;
  padding: 1vmin 1vmin;
`;

export default Logo;
