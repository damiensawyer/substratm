import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
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
    <Router>
      <NavigationBar />
      <Header />
      <Switch>
        <Route exact path="/" render={() => <h1>Welcome!</h1>} />
        {isLoggedIn ? (
          <>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route render={() => <h1>404: page not found</h1>} />
          </>
        ) : <Route component={UnAuthenticatedView}/>}
      </Switch>
    </Router>
  );
}

export default App;
