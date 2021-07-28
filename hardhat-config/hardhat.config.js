/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      chainId: 1337,
      mining: { // Mines a new block every .5 seconds
        auto: false,
        interval: 500
      }
    }
  }
};