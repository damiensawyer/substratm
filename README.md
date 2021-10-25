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

## Libraries
I was thinking to use the following libraries. Yell out if you hate them or have a better idea. 
    - [Redux Toolkit](https://redux-toolkit.js.org)
    - [Mui](https://mui.com)


## Builds and tests
Dev
[![Build Status](https://dev.azure.com/damiensawyer/Substratm/_apis/build/status/damiensawyer.substratm?branchName=develop)](https://dev.azure.com/damiensawyer/Substratm/_build/latest?definitionId=34&branchName=develop)

Main
[![Build Status](https://dev.azure.com/damiensawyer/Substratm/_apis/build/status/damiensawyer.substratm?branchName=main)](https://dev.azure.com/damiensawyer/Substratm/_build/latest?definitionId=34&branchName=main)