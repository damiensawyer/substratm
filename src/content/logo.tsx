import React from 'react';
import logo from './substratmlogo.png';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { useAppDispatch } from '../slices/hooks';
import { tapLogoForDevMode as tapLogoForDevMode  } from '../slices/devMode.slice';
import { Console } from 'console';

export const imageClick = () => {
  console.log('Click!!!!');
}  

export const Logo = () => {
  const dispatch = useAppDispatch();
  return <StyledLogo src={logo} className="App-logo" alt="logo" onClick={() => dispatch(tapLogoForDevMode())} />;
};

export const SubstramLogo = () => {
  return (
    <StyledTypographyLogo>
      <Typography variant="h2" component="h3">
        SUBSTRATM
      </Typography>
    </StyledTypographyLogo>
  );
};
const StyledTypographyLogo = styled.div`
  margin: 15px;
`;
const StyledLogo = styled.img`
  height: 40vmin;
`;

export default Logo;
