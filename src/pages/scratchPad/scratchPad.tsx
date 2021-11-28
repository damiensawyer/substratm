import {Label} from "@material-ui/icons";
import ReactJson from 'react-json-view';
import {Button, TextField} from "@mui/material";
import {Button, Paper, TextField} from "@mui/material";
import Moralis from "moralis";
import React, {useEffect, useState} from "react";
import {useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall} from "react-moralis";
import { Card } from '@mui/material';

import Address from '../../components/Address/Address';
import {MyPaper, SmallPre, StyledPaper} from "../../content/commonStyles";
import {RaisedPaper, RaisedPaperCode} from "../../content/componentStyles";
// import {SubstratmNFTABI} from "../../functions/SubstratmNFTABI";
import SubstratmNFT from '../../artifacts/contracts/SubstratmNFT.sol/SubstratmNFT.json';

declare const ethers: any
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
    const [nftResult, setNftResult] = useState(null);
    const [twitterHandle, setTwitterHandle] = useState({});
    const [tweetId, setTweetId] = useState({});
    const [nftMintedForAddress, setNftMintedForAddress] = useState<boolean | null>(null); // should re
    const [twitterHandleRetrievedFromContract, setTwitterHandleRetrievedFromContract] = useState<string | null>(null);


    const CONTRACT_ADDRESS = "0x8E21feCdcd873A938caF35b1449cc2dA5D3624D2" // deployed on ropsten

    const getUserAddress = async () => {
        let web3 = await Moralis.Web3.enableWeb3()
        let accounts = await web3.eth.getAccounts()
        return accounts[0] as string;
    };

    // Uses https://github.com/MoralisWeb3/react-moralis#resolve-data-with-usemoralisweb3apicall
    // This is not ideal as it will re-execute the call alot. Use useMoralisWeb3ApiCall instead passing in dependencies. 
    const fetchBlock = async () => {
        const result = await Web3Api.native.getBlock({
            block_number_or_hash: '4614776'
        })
        result.transactions = [result.transactions[0]]; // Trim the transactions
        setSampleBlock(JSON.stringify(result, null, 2))
    }

    useEffect(() => {
        fetchBlock()
    })


    // https://youtu.be/rd0TTLjQLy4?t=1152
    const optionsCore = {
        contractAddress: CONTRACT_ADDRESS,
        abi: SubstratmNFT.abi,

    };

    const checkIfNFTMintedForUser = async () => {
        let userAddress = await getUserAddress()

        let options = {
            functionName: "nftExistsForAccount",
            params: {
                userAddress: userAddress
            }, ...optionsCore
        }

        let result = await Moralis.Web3.executeFunction(options)
        setNftMintedForAddress(result as boolean)
        console.log('check address minted', result)

    }    
    
        const loadTwitterHandle = async () => {
        let userAddress = await getUserAddress()

        let options = {
            functionName: "readTwitterHandleForGivenAddress",
            params: {
                userAddress: userAddress
            }, ...optionsCore
        }

        let result = await Moralis.Web3.executeFunction(options)
        setTwitterHandleRetrievedFromContract(result as string)
        console.log('retrieved Twitter Handle', result)

    }


    const mintNFT = async () => {

        const options = {
            functionName: "requestToMintNewSubstratmProfileNFT",
            ...optionsCore
        }
        try {
            const result = await Moralis.Web3.executeFunction(options)
            setNftResult(result)
            console.log('result', result)
        } catch (e) {
            console.log('error', e);
        }
    }
    const validateTwitterData = async () => {
        const options = {
            functionName: "updateSubstratmProfile",
            params: {
            'twitterHandle': twitterHandle,
            'tweetId': tweetId,
            'verificationString': 'verification'
            },
            ...optionsCore
        }
        try {
            const result = await Moralis.Web3.executeFunction(options)
            console.log('result', result)
        } catch (e) {
            console.log('error', e);
        }
    }

    // note, these fail if you hit f5, even though we're connected to meta
    const {data: d1, isFetching: f1, error: e1} = useMoralisWeb3ApiCall(getNativeBalance) // https://github.com/MoralisWeb3/react-moralis#resolve-data-with-usemoralisweb3apicall mask. 
    const {data: d2, isFetching: f2, error: e2} = useMoralisWeb3ApiCall(getTokenBalances)


    const moralisData = {
        User: Moralis.User.current(),
        serverURL: Moralis.serverURL
    }
    const twitterVerification = (
        <RaisedPaperCode>
            <div>
                <h3>Connect your Twitter Handle to your account by tweeting "Verification":</h3>
                <TextField id="outlined-basic" label="Twitter Handle" variant="outlined" onChange={event => setTwitterHandle(event.target.value)}/>
                <TextField id="outlined-basic" label="Tweet Id" variant="outlined" onChange={event => setTweetId(event.target.value)}/>
                <br/>
                <Button variant="contained" onClick={validateTwitterData}>Connect Twitter Handle To Profile</Button>
            </div>
        </RaisedPaperCode>
    );
    return <>
        <h1>Mint Substratm NFT</h1>
        <div>
            <Button variant="contained" onClick={mintNFT}>Mint NFT</Button>
            {/*{!!nftResult && <><h5>Minted an NFT...</h5><RaisedPaperCode><ReactJson src={nftResult} theme="monokai"/></RaisedPaperCode></>}*/}
        </div>
            <br/>
        {twitterVerification}

        <h3>Checking NFT Minted Status for current metamask account</h3>
        <div>

            <Button variant="contained" onClick={checkIfNFTMintedForUser}>Check if Address Minted (note, on Ropsten, needed to wait a few seconds for miners. )</Button>
            {nftMintedForAddress !== null && <><h5>NFT Minted: </h5>{nftMintedForAddress ? 'yes, minted' : 'no, not minted'} </>}
        </div>

        <h3>Read Twitter handle from contract for current metamask account</h3>
        <div>

            <Button variant="contained" onClick={loadTwitterHandle}>Read Twitter Handle from Contract</Button>
            {twitterHandleRetrievedFromContract !== null && <><h5>Twitter Handle: </h5>{twitterHandleRetrievedFromContract} </>}
        </div>
    </>
};

export default About;
