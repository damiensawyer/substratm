import {Button, CssBaseline} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {toggleLogin} from "../../features/login.slice";

const Login = () => {
    let dispatch = useAppDispatch();
    let isLoggedIn = useAppSelector(x => x.loginSlice.loggedIn)
    return <div className="App">
        
        <header className="App-header">
            <h1>Login</h1>
            <h2>Logged In: {isLoggedIn ? 'yes' : 'no'}</h2>
            <Button variant="contained" onClick={() => dispatch(toggleLogin())}>Toggle Login</Button>
        </header>
    </div>
    
}
export default Login;
