import React, { Component, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import NavigationBar from './components/navigation/navigationBar';
import './App.css';
import { useAppSelector, useAppDispatch } from './slices/hooks';
import { setPing, setPong } from './slices/counter.slice';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Header from './components/Header/Header';
import UnAuthenticatedView from './pages/unauthenticated/UnAuthenticatedView';

function App() {
  let isStarted = useAppSelector((x) => x.counterSlice.isStarted);
  let isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);

  let dispatch = useAppDispatch();

  useEffect(() => {
    if (!isStarted) dispatch(setPing());
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <div className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <h1>Welcome!</h1>} />
            <Route path="/login" component={UnAuthenticatedView} />
            <Route path="/home" render={() => requireAuth(Home, isLoggedIn)} />
            <Route
              path="/about"
              render={() => requireAuth(About, isLoggedIn)}
            />
            <Route path="*">404</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
function requireAuth(Component: any, isLoggedIn: boolean) {
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return Component;
}

export default App;
