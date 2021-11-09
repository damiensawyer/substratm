import React, { useEffect } from 'react';
import {useMoralis } from "react-moralis";
import { useAppSelector, useAppDispatch } from '../../slices/hooks';
import { setPing } from '../../slices/counter.slice';
import styled from 'styled-components';
import { Logo } from '../../content/logo';
function Home() {
  let isStarted = useAppSelector((x) => x.counterSlice.isStarted);
  let isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);
  let dispatch = useAppDispatch();

    

  // const APP_ID = (process.env.REACT_APP_MORALIS_APPLICATION_ID as string); 
  // const SERVER_URL = (process.env.REACT_APP_MORALIS_SERVER_URL as string);
  const damien = (process.env.DAMIEN as string);
  const { authenticate, isAuthenticated, user } = useMoralis();
  var u: string = JSON.stringify(user, undefined, 2)
  useEffect(() => {
    if (!isStarted) dispatch(setPing())
    u = JSON.stringify(user)
  }, []);

  return (
    <>
      <Logo />
      <StyledLink target="_blank" href="https://chain.link/hackathon">
        <pre>https://chain.link/hackathon</pre>
      </StyledLink>
      <pre>My string: {damien}</pre>
      {/*<pre>dev {pingValue}</pre>*/}
      <pre>logged In {isLoggedIn ? 'yes' : 'no'}</pre>
      <pre className={'small'}>user Info {u}</pre>
    </>
  );
}

const StyledLink = styled.a`
  color: #61dafb;
`;

export default Home;
