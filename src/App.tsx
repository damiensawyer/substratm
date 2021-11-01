import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './content/substratmlogo.png';
import './App.css';
import {useAppSelector, useAppDispatch} from "./features/hooks";
import {add} from './functions/maths';
import {setPing, setPong} from "./features/counter.slice";
import About from "./pages/about/About";
import Home from "./pages/home/Home";


function App() {
    let pingValue = useAppSelector(x => x.counterSlice.pingValue)
    let isStarted = useAppSelector(x => x.counterSlice.isStarted)
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
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        
                    </ul>
                </nav>
            </main>
            <Route exact path="/" render={() => <h1>Welcome!</h1>} />
            <Route path="/" render={() => <p>...always renders because no exact</p>} />
            <Route path="/home"  component={Home} />
            <Route path="/about"  component={About} />
            <Route render={() => <h1>404: page not found</h1>} />
        </Router>
    );
}

export default App;
