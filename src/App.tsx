import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './components/navigation/navigationBar';
import './App.css';
import ScratchPad from './pages/scratchPad/scratchPad';
import { useAppSelector, useAppDispatch } from './slices/hooks';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import UnAuthenticatedView from './pages/unauthenticated/UnAuthenticatedView';

function App() {
  let isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);

  return (
    <BrowserRouter>
      <StyledApp>
        <NavigationBar />
        <Header />
        <StyledHeader>
          <Switch>
            <Route exact path="/" render={() => <h1></h1>} />
            {isLoggedIn && (
              <>
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                {/*it would be good to render this only in dev mode if we can get that requireAuth function working */}
                <Route path="/scratchpad" exact component={ScratchPad} />
              </>
            )}

            {!isLoggedIn && <Route component={UnAuthenticatedView} />}
          </Switch>
        </StyledHeader>
      </StyledApp>
    </BrowserRouter>
  );
}
const StyledApp = styled.div`
  text-align: center;
`;
const StyledHeader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
export default App;
