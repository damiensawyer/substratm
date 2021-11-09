import { Button } from '@mui/material';
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
    
    <Button
      variant="contained"
      color="secondary"
      disabled={isAuthenticating}
      onClick={signInOrSignOut}
    >
      {isLoading
        ? 'Loading...'
        : isLoggedIn
        ? 'Disconnect'
        : 'Connect and Log In'}
    </Button>
    
    </>
  );
};
export default MetamaskLogin;
