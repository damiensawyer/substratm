# Substratm

## Overview
- Git repo for project. I can add you all as admin. If you don't have all the permissions you need, reach out. 
- Let's track issues / bugs in github. 
- CI / CD is setup. 
    - Any commits to the ```develop``` branch will run tests and deploy to [dev.substratm.com](http://dev.substratm.com)
    - Any commits to the ```main``` branch will run tests and deploy to [www.substratm.com](http://www.substratm.com)

## Getting Started
    - You need node installed
    - Checkout this code 
    - npm install
    - npm start

## Tests
    - run Jest tests with ```npm test``` or ```npm run test:ci```

## Hardhat Commands
    - npx hh compile
    - npx hh test
    - npx hardhat run scripts/deploy.js --network <network-name>

``` 
possible network-names:
- localhost
- rinkeby
- ropsten
```

# Deploy using HardHat
### 1. Add your *test* wallet's PRIVATE_KEY to your .env file
```
To export your private key from Metamask, open Metamask and
go to Account Details > Export Private Key
Be aware of NEVER putting real Ether into testing accounts
```
### 2. Fund your test wallet with ETH 

you'll need to have your wallet funded on the network you intend to deploy to
```
ROPSTEN Faucet: https://faucet.ropsten.be/
RINKEBY Faucet: https://faucet.rinkeby.io/
```
### 3. Run this script: 
```npx hardhat run scripts/deploy.js --network <network-name>```
``` 
possible network-names:
- localhost
- rinkeby
- ropsten

You can add new networks in the hardhat.config.js
``` 

### 4. Your contract should be deployed!

The script should output the contract address. 

View your deployed contract on etherscan:
```
RINKEBY: https://rinkeby.etherscan.io/address/<INSERT-ADDRESS-HERE>
ROPSTEN: https://ropsten.etherscan.io/address/<INSERT-ADDRESS-HERE>
```

### 5. Verify your contract on Etherscan
    

## Libraries
I was thinking to use the following libraries. Yell out if you hate them or have a better idea. 
* [Redux Toolkit](https://redux-toolkit.js.org)
* [Mui](https://mui.com)
* [React Hook Form](https://react-hook-form.com/)

                 



