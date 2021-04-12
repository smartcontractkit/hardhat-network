# Deploy Hardhat Network
Docker container that deploys a basic hardhat network for local and CI testing. 

### How to Run
`docker run -p 8545:8545 deploy-hardhat`

From there you can connect normally to the hardhat chain at `http://localhost:8545`

Learn more about the hardhat network at [hardhat's documentation](https://hardhat.org/hardhat-network/)