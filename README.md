# Deploy Hardhat Network

Docker container that deploys a basic hardhat network for local and CI testing.

## How to Run

`docker run -p 8545:8545 deploy-hardhat`

This will start a docker container with a new Ethereum hardhat blockchain running in it, where
**new blocks are mined every .5 seconds**. From there you can connect normally to the hardhat chain at `ws://localhost:8545`

Learn more about the hardhat network at [hardhat's documentation](https://hardhat.org/hardhat-network/)
