import Moralis from "moralis";
import React from "react";
import {useMoralis} from "react-moralis";
import Address from '../../components/Address/Address';

const About = () => {
    const {
        isWeb3Enabled,
        isAuthenticated,
        enableWeb3,
        authenticate,
        logout,
        isAuthenticating,
        isWeb3EnableLoading,
        user
    } = useMoralis();
    var u: string = JSON.stringify(user, undefined, 2)

    let moralisData = {
        User:Moralis.User.current(),
        serverURL:Moralis.serverURL
    }
    //let currentUser = Moralis.User.current() // This is quiv

    



    return <>
        <h1>About</h1>
        <Address/>
        {/* <pre className={'small'}>user Info {u}</pre> */}

        <pre className={'small'}>user 2 Info {JSON.stringify(moralisData, null, 2)}</pre>
    </>
};

export default About;
