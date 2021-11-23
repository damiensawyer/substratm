﻿// I used truffle to compile Lillies smart contract and then copy the abi and bytecode to this file. See // https://youtu.be/rd0TTLjQLy4?t=1152

 export const SubstratmNFTABI = [
     {
         "inputs": [],
         "stateMutability": "nonpayable",
         "type": "constructor"
     },
     {
         "anonymous": false,
         "inputs": [
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "owner",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "approved",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "Approval",
         "type": "event"
     },
     {
         "anonymous": false,
         "inputs": [
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "owner",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "operator",
                 "type": "address"
             },
             {
                 "indexed": false,
                 "internalType": "bool",
                 "name": "approved",
                 "type": "bool"
             }
         ],
         "name": "ApprovalForAll",
         "type": "event"
     },
     {
         "anonymous": false,
         "inputs": [
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "previousOwner",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "newOwner",
                 "type": "address"
             }
         ],
         "name": "OwnershipTransferred",
         "type": "event"
     },
     {
         "anonymous": false,
         "inputs": [
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "from",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "indexed": true,
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "Transfer",
         "type": "event"
     },
     {
         "inputs": [
             {
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "approve",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "address",
                 "name": "owner",
                 "type": "address"
             }
         ],
         "name": "balanceOf",
         "outputs": [
             {
                 "internalType": "uint256",
                 "name": "",
                 "type": "uint256"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "getApproved",
         "outputs": [
             {
                 "internalType": "address",
                 "name": "",
                 "type": "address"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "address",
                 "name": "owner",
                 "type": "address"
             },
             {
                 "internalType": "address",
                 "name": "operator",
                 "type": "address"
             }
         ],
         "name": "isApprovedForAll",
         "outputs": [
             {
                 "internalType": "bool",
                 "name": "",
                 "type": "bool"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "name",
         "outputs": [
             {
                 "internalType": "string",
                 "name": "",
                 "type": "string"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "owner",
         "outputs": [
             {
                 "internalType": "address",
                 "name": "",
                 "type": "address"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "ownerOf",
         "outputs": [
             {
                 "internalType": "address",
                 "name": "",
                 "type": "address"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "uint256",
                 "name": "",
                 "type": "uint256"
             }
         ],
         "name": "profileIdToOwnerAddress",
         "outputs": [
             {
                 "internalType": "address",
                 "name": "",
                 "type": "address"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "uint256",
                 "name": "",
                 "type": "uint256"
             }
         ],
         "name": "profiles",
         "outputs": [
             {
                 "internalType": "string",
                 "name": "twitterHandle",
                 "type": "string"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "renounceOwnership",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "address",
                 "name": "from",
                 "type": "address"
             },
             {
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "safeTransferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "address",
                 "name": "from",
                 "type": "address"
             },
             {
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             },
             {
                 "internalType": "bytes",
                 "name": "_data",
                 "type": "bytes"
             }
         ],
         "name": "safeTransferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "address",
                 "name": "operator",
                 "type": "address"
             },
             {
                 "internalType": "bool",
                 "name": "approved",
                 "type": "bool"
             }
         ],
         "name": "setApprovalForAll",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "bytes4",
                 "name": "interfaceId",
                 "type": "bytes4"
             }
         ],
         "name": "supportsInterface",
         "outputs": [
             {
                 "internalType": "bool",
                 "name": "",
                 "type": "bool"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [],
         "name": "symbol",
         "outputs": [
             {
                 "internalType": "string",
                 "name": "",
                 "type": "string"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "tokenURI",
         "outputs": [
             {
                 "internalType": "string",
                 "name": "",
                 "type": "string"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "address",
                 "name": "from",
                 "type": "address"
             },
             {
                 "internalType": "address",
                 "name": "to",
                 "type": "address"
             },
             {
                 "internalType": "uint256",
                 "name": "tokenId",
                 "type": "uint256"
             }
         ],
         "name": "transferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "address",
                 "name": "newOwner",
                 "type": "address"
             }
         ],
         "name": "transferOwnership",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "uint256",
                 "name": "profileId",
                 "type": "uint256"
             }
         ],
         "name": "getProfileMetadata",
         "outputs": [
             {
                 "internalType": "string",
                 "name": "",
                 "type": "string"
             }
         ],
         "stateMutability": "view",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "uint256",
                 "name": "profileId",
                 "type": "uint256"
             }
         ],
         "name": "updateSubstratmProfile",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "string",
                 "name": "baseURI_",
                 "type": "string"
             }
         ],
         "name": "setBaseURI",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "string",
                 "name": "twitterHandle",
                 "type": "string"
             }
         ],
         "name": "requestToMintNewSubstratmProfileNFT",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     },
     {
         "inputs": [
             {
                 "internalType": "uint256",
                 "name": "profileId",
                 "type": "uint256"
             },
             {
                 "internalType": "string",
                 "name": "_profileURI",
                 "type": "string"
             }
         ],
         "name": "setTokenURI",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
     }
 ]