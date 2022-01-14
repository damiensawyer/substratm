import React from 'react';
import { useMoralis } from 'react-moralis';
import { useAppSelector, useAppDispatch } from '../../slices/hooks';

import styled from 'styled-components';
import { Logo } from '../../content/logo';
function Home() {
  let isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);
  let dispatch = useAppDispatch();

  const damien = process.env.DAMIEN as string;
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <>
      <Logo />
      <StyledLink target="_blank" href="https://chain.link/hackathon">
        <pre>https://chain.link/hackathon</pre>
      </StyledLink>
      <pre>My string: {damien}</pre>
      <pre>logged In {isLoggedIn ? 'yes' : 'no'}</pre>
    </>
  );
}

const StyledLink = styled.a`
  color: #61dafb;
`;

export default Home;
