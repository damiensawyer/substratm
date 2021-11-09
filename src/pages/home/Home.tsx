import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../slices/hooks';
import { setPing } from '../../slices/counter.slice';
import styled from 'styled-components';
import { Logo } from '../../content/logo';
function Home() {
  let pingValue = useAppSelector((x) => x.counterSlice.pingValue);
  let isStarted = useAppSelector((x) => x.counterSlice.isStarted);
  let dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (!isStarted) dispatch(setPing());
  // }, []);

  return (
    <>
      <Logo />
      <StyledLink target="_blank" href="https://chain.link/hackathon">
        <pre>https://chain.link/hackathon</pre>
      </StyledLink>
      <pre>dev {pingValue}</pre>
    </>
  );
}

const StyledLink = styled.a`
  color: #61dafb;
`;

export default Home;
