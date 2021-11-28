import {Button, Chip} from "@mui/material";
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Toolbar} from "@material-ui/core";
import {useAppSelector} from "../../slices/hooks";
import {SubstramLogo} from "../../content/logo";
import MetamaskLogin from "../MetamaskLogin/MetamaskLogin";

const Header = () => {
    const isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);
    const isDevMode = useAppSelector((x) => x.devModeSlice.isDevMode);

    return (
        <StyledHeader>
            <StyledToolbar>
                {isLoggedIn && (
                    // https://stackoverflow.com/a/51642640/494635
                    <Button component={Link} to="/home" variant="contained" color="secondary" href="/home">
                        Home
                    </Button>
                )}

                {isLoggedIn && (
                    <Button component={Link} to="/about" variant="contained" color="secondary" href="/home">
                        About
                    </Button>
                )}

                {isLoggedIn && isDevMode && (
                    <Button component={Link} to="/scratchpad" variant="contained" color="secondary" href="/scratchpad">
                        Create Profile
                    </Button>
                )}

                <MetamaskLogin/>

            </StyledToolbar>
            <SubstramLogo/>

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
