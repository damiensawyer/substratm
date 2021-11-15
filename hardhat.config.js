require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";

module.exports = {
  solidity: "0.8.0",
  networks: {
//    ropsten: {
//      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
//      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
//    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys,
          RINKEBY_RPC_URL
        )
      },
      gas: 10000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 4
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys,
          ROPSTEN_RPC_URL
        )
      },
      gas: 50000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 3
    }
  }
};