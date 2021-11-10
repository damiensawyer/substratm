import Moralis from "moralis";
import React, {useEffect, useState} from "react";
import {useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall} from "react-moralis";
import {sample} from "rxjs";
import Address from '../../components/Address/Address';
import Polygon = Moralis.Polygon;
import {SmallPre, StyledPaper} from "../../content/commonStyles";

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
    const damien = (process.env.REACT_APP_DAMIEN as string);
    const {account: {getNativeBalance, getTokenBalances}} = useMoralisWeb3Api()
    const Web3Api = useMoralisWeb3Api()
    const [sampleBlock, setSampleBlock] = useState('loading sample block....');
    
    
    // Uses https://github.com/MoralisWeb3/react-moralis#resolve-data-with-usemoralisweb3apicall
    // This is not ideal as it will re-execute the call alot. Use useMoralisWeb3ApiCall instead passing in dependencies. 
    const fetchBlock = async() => {
        const result = await Web3Api.native.getBlock({
            block_number_or_hash: '4614776'
        })
            result.transactions = [result.transactions[0]]; // Trim the transactions
        setSampleBlock(JSON.stringify(result,null,2))
    }
    
    useEffect(()=>{fetchBlock()})
    
    

    // note, these fail if you hit f5, even though we're connected to meta
    const {data:d1, isFetching:f1, error:e1} = useMoralisWeb3ApiCall(getNativeBalance) // https://github.com/MoralisWeb3/react-moralis#resolve-data-with-usemoralisweb3apicall mask. 
    const {data:d2, isFetching:f2, error:e2} = useMoralisWeb3ApiCall(getTokenBalances)
       
    
    let moralisData = {
        User:Moralis.User.current(),
        serverURL:Moralis.serverURL
    }

    return <>
        <h1>Scratch Pad</h1>
        
        <h3>Reading data from moralise web 3 api calls</h3>
        
        <div>
        {f1 && <>Fetching Native Balances</>}
        {!!d1 && !!d1.balance && <>Native Balance is {d1.balance}</>}
        </div>


        <div>
            {f2 && <>Fetching Token Balances</>}
            {!!d2 && <>Token Balance Count: {d2.length}</> }
            {!!d2 && d2.map(x=><>Token {x.name} Balance is {x.balance}</>) }
        </div>
        
        <h3>Sample of reading a block from chain</h3>
        <SmallPre>SampleBlock: {sampleBlock}</SmallPre>
        
        <h3>Reading Custom Setting from .env file</h3>
        <p>custom setting (damien): {damien}</p>
        <Address/>
        <SmallPre className={'small'}>user 2 Info {JSON.stringify(moralisData, null, 2)}</SmallPre>
    </>
};

export default About;
