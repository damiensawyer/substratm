import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import logo from './content/substratmlogo.png';
import './App.css';
import {useAppSelector, useAppDispatch} from "./features/hooks";
import {add} from './functions/maths';
import {setPing, setPong} from "./features/counter.slice";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


function App() {
    let pingValue = useAppSelector(x => x.counterSlice.pingValue)
    let isStarted = useAppSelector(x => x.counterSlice.isStarted)
    let isLoggedIn = useAppSelector(x => x.loginSlice.loggedIn)
    let dispatch = useAppDispatch()


    useEffect(() => {
        if (!isStarted)
            dispatch(setPing())
    }, []);

    return (
        <Router>
            <main>
                <nav>
                    <ul>
                        <li><Link to="/">Root</Link></li>
                        {/*// https://knowbody.github.io/react-router-docs/api/Link.html*/}
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <h3>Logged In: {isLoggedIn ? 'yes' : 'no'}</h3>
            </main>
            <Switch>
                <Route exact path="/" render={() => <h1>Welcome!</h1>}/>
                <Route path="/login" component={Login}/>
                {isLoggedIn
                    ? <>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route render={() => <h1>404: page not found</h1>}/>
                    </>
                    : <Redirect to="/login"/>
                }

            </Switch>


        </Router>
    );
}

export default App;
