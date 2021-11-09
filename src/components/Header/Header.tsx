import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import { useAppSelector } from "../../slices/hooks";
import { SubstramLogo } from "../../content/logo";
import MetamaskLogin from "../MetamaskLogin/MetamaskLogin";

const Header = () => {
  const isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);
  const isDevMode = useAppSelector((x) => x.devModeSlice.isDevMode);

  return (
    <StyledHeader>
      <StyledToolbar>
        {isDevMode && <>Logged In:{isLoggedIn ? "yes" : "no"}</>}
        {/* <Link to="/home" className="button">Home</Link>
        <Link to="/about">About</Link> */}
        {isLoggedIn && (
          // https://stackoverflow.com/a/51642640/494635
          <Link to="/home">
            <Button variant="contained" color="secondary" href="/home">
              Home
            </Button>
          </Link>
        )}

      <Button component={Link} to="/home" variant="contained" color="secondary" href="/home">
              Home22
            </Button>
        {isLoggedIn && (
          <Link to="/about">
            <Button variant="contained" color="secondary" href="/about">
              About
            </Button>
          </Link>
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
