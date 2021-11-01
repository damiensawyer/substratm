import React, {useEffect} from 'react';
import logo from './content/substratmlogo.png';
import './App.css';
import {useAppSelector, useAppDispatch} from "./features/hooks";
import {add} from './functions/maths';
import {setPing, setPong} from "./features/counter.slice";

function App() {
    let pingValue = useAppSelector(x => x.counterSlice.pingValue)
    let isStarted = useAppSelector(x => x.counterSlice.isStarted)
    let dispatch = useAppDispatch()

    useEffect(() => {
        if (!isStarted)
            dispatch(setPing())
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <a className="App-link" target="_blank" href="https://chain.link/hackathon">
                    <pre>https://chain.link/hackathon</pre>
                </a>
                <pre>dev {pingValue}</pre>
            </header>
        </div>
    );
}

export default App;
