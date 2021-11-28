require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const privateKey = process.env.PRIVATE_KEY
const accounts = {accounts: [`0x${privateKey}`]}
task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async () => {});

module.exports = {
    solidity: "0.8.7",
    networks: {
        ropsten: {
          url: `https://speedy-nodes-nyc.moralis.io/72216de496ff399faf1f925a/eth/ropsten`,
          ...accounts
        },
        ganash: {
          url: `HTTP://127.0.0.1:7545`,
          ...accounts
        },
        rinkeby: {
            url: "https://speedy-nodes-nyc.moralis.io/72216de496ff399faf1f925a/eth/rinkeby",
            ...accounts
        },
        kovan: {
            url: "https://speedy-nodes-nyc.moralis.io/72216de496ff399faf1f925a/eth/kovan",
            ...accounts
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
};