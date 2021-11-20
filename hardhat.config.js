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
    solidity: "0.8.0",
    networks: {
        ropsten: {
          url: `https://speedy-nodes-nyc.moralis.io/72216de496ff399faf1f925a/eth/ropsten`,
          ...accounts
        },
        rinkeby: {
            url: "https://speedy-nodes-nyc.moralis.io/72216de496ff399faf1f925a/eth/rinkeby",
            ...accounts
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
};