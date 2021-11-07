import { CssBaseline } from '@mui/material';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import NavigationBar from './components/navigation/navigationBar';
import logo from './content/substratmlogo.png';
import './App.css';
import { useAppSelector, useAppDispatch } from './slices/hooks';
import { add } from './functions/maths';
import { setPing, setPong } from './slices/counter.slice';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Header from './components/Header/Header';

function App() {
  let pingValue = useAppSelector((x) => x.counterSlice.pingValue);
  let isStarted = useAppSelector((x) => x.counterSlice.isStarted);
  let isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);
  let dispatch = useAppDispatch();

  useEffect(() => {
    if (!isStarted) dispatch(setPing());
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Header />
      <Switch>
        <Route exact path="/" render={() => <h1>Welcome!</h1>} />
        <Route path="/login" component={Login} />
        {isLoggedIn ? (
          <>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route render={() => <h1>404: page not found</h1>} />
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
