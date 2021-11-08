import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../slices/hooks';
import { login, logout as logoutAction, toggleLogin } from '../../slices/login.slice';
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
    console.log('signing in or out');
    if(!isWeb3Enabled || !isAuthenticated){
      console.log('signing in');
      enableAndAuthenticate();
    } else {
      console.log('signing out');
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
    if(isLoggedIn) {
      dispatch(login());
    } else {
      dispatch(logoutAction())
    }
  }, [isLoggedIn]);

  return (
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
  );
};
export default MetamaskLogin;
