import { Button } from '@mui/material';
import styled from 'styled-components';
import { useAppDispatch } from '../../slices/hooks';
import {
  login,
  logout as logoutAction,
  toggleLogin,
} from '../../slices/login.slice';
import { useMoralis } from 'react-moralis';
import { useEffect } from 'react';
const MetamaskLogin = () => {
  let dispatch = useAppDispatch();
  const {
    isWeb3Enabled,
    isAuthenticated,
    enableWeb3,
    authenticate,
    logout,
    isAuthenticating,
    isWeb3EnableLoading,
  } = useMoralis();
  const isLoading = isAuthenticating || isWeb3EnableLoading;
  const isLoggedIn = isAuthenticated;
  const enableAndAuthenticate = async () => {
    await enableWeb3();
    await authenticate();
  };
  const signInOrSignOut = () => {
    if (!isWeb3Enabled || !isAuthenticated) {
      enableAndAuthenticate();
    } else {
      logout();
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      enableWeb3();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(toggleLogin());
    if (isLoggedIn) {
      dispatch(login());
    } else {
      dispatch(logoutAction());
    }
  }, [isLoggedIn]);

  return (
    <>
      <StyledButton
        variant="contained"
        color="primary"
        disabled={isAuthenticating}
        onClick={signInOrSignOut}
      >
        {isLoading
          ? 'Loading...'
          : isLoggedIn
          ? 'Disconnect'
          : 'Connect Wallet'}
      </StyledButton>
    </>
  );
};
const StyledButton = styled(Button)`
  height: 65px;
  width: 170px;
`;
export default MetamaskLogin;
