import {Label} from "@material-ui/icons";
import {Button, TextField} from "@mui/material";
import Moralis from "moralis";
import React, {useEffect, useState} from "react";
import {useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall} from "react-moralis";
import Address from '../../components/Address/Address';
import {MyPaper, SmallPre, StyledPaper} from "../../content/commonStyles";
import {RaisedPaper, RaisedPaperCode} from "../../content/componentStyles";
declare const ethers:any
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
    
    
    const CONTRACT_ADDRESS = "0x78ef536b8Df28aCC8bB23D64784dbEB2331B787F"
    
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


    const mintNFT = async() => {
        let web3 = await Moralis.Web3.enableWeb3()
        let accounts = await web3.eth.getAccounts()
        const contract = new web3.eth.Contract({type:'function'}, CONTRACT_ADDRESS)
        const SubstratmNFT = await ethers.getContractFactory("SubstratmNFT");
        console.log('accounts', accounts)
    }
    
    // note, these fail if you hit f5, even though we're connected to meta
    const {data:d1, isFetching:f1, error:e1} = useMoralisWeb3ApiCall(getNativeBalance) // https://github.com/MoralisWeb3/react-moralis#resolve-data-with-usemoralisweb3apicall mask. 
    const {data:d2, isFetching:f2, error:e2} = useMoralisWeb3ApiCall(getTokenBalances)
       
    
    let moralisData = {
        User:Moralis.User.current(),
        serverURL:Moralis.serverURL
    }

    return <>
        <h1>Scratch Pad</h1>
        <h3>Minting NFT with SubstratmNFT.sol</h3>
        <div>
        
            <TextField id="outlined-basic" label="Twitter Handle" variant="outlined" />
            <Button variant="contained" onClick={mintNFT}>Mint NFT</Button>
        </div>    
        
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
        <RaisedPaperCode><>{sampleBlock}</></RaisedPaperCode>
        
        <h3>Reading Custom Setting from .env file</h3>
        <p>custom setting (damien): {damien}</p>
        <Address/>
        <RaisedPaperCode><>user 2 Info {JSON.stringify(moralisData, null, 2)}</></RaisedPaperCode>
    </>
};

export default About;
