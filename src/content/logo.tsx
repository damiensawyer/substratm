import React from 'react';
import logo from './substratmlogo.png';
import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Logo = () => {
  return <StyledLogo src={logo} className="App-logo" alt="logo" />;
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
  pointer-events: none;
`;

export default Logo;
