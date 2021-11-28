import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavigationBar from "./components/navigation/navigationBar";
import "./App.css";
import ScratchPad from "./pages/scratchPad/scratchPad";
import {useAppSelector, useAppDispatch} from "./slices/hooks";
import {setPing, setPong} from "./slices/counter.slice";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import UnAuthenticatedView from "./pages/unauthenticated/UnAuthenticatedView";

function App() {
    let isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);
    let isDevMode = useAppSelector((x) => x.devModeSlice.isDevMode);

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <NavigationBar/>
                    <Header/>
                    <div className="App-header">
                        <Switch>
                            <Route exact path="/" render={() => <h1>Welcome!</h1>}/>
                            {isLoggedIn && (
                                <>
                                    <Route path="/home" exact component={Home}/>
                                    <Route path="/about" exact component={About}/>
                                    {/*it would be good to render this only in dev mode if we can get that requireAuth function working */}
                                    <Route path="/scratchpad" exact component={ScratchPad}/> 
                                </>
                            )}

                            {!isLoggedIn && (
                                <Route component={UnAuthenticatedView}/>
                            )}

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

/**
 functional requireAuth code... which I love, but didn't seem to work for me. If anyone can see what's wrong I much prefer this pattern.
 */

// import React, { Component, useEffect } from 'react';

// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch,
// } from 'react-router-dom';
// import NavigationBar from './components/navigation/navigationBar';
// import './App.css';
// import { useAppSelector, useAppDispatch } from './slices/hooks';
// @@ -27,20 +33,24 @@ function App() {
//         <Router>
//           <Switch>
//             <Route exact path="/" render={() => <h1>Welcome!</h1>} />
//             <Route path="/login" component={UnAuthenticatedView} />
//             <Route path="/home" render={() => requireAuth(Home, isLoggedIn)} />
//             <Route
//               path="/about"
//               render={() => requireAuth(About, isLoggedIn)}
//             />
//             <Route path="*">404</Route>
//           </Switch>
//         </Router>
//       </div>
//     </div>
//   );
// }
// function requireAuth(Component: any, isLoggedIn: boolean) {
//   if (!isLoggedIn) {
//     return <Redirect to="/login" />;
//   }
//   return Component;
// }
