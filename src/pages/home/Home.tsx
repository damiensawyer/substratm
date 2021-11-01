import React, {useEffect} from 'react';
import logo from '../../content/substratmlogo.png';
import './Home.css';
import {useAppSelector, useAppDispatch} from "../../slices/hooks";
import {setPing, setPong} from "../../slices/counter.slice";


function Home() {
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

export default Home;
