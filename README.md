# boilerplate-blockchain
typescript, hardhat with ethers and waffle, typechain, solhint, husky

Clean artifacts if needed
> npx hardhat clean

Compile contracts
> npx hardhat compile

Run tests
> npx hardhat test

Deploy on a network (here rinkeby)
> npx hardhat run --network rinkeby scripts/deploy.ts

Verify contract through etherscan plugin
> npx hardhat verify --network rinkeby --show-stack-traces CONTRACT_ADDRESS

# useful links

- [Hardhat's Hackathon Boilerplate](https://github.com/nomiclabs/hardhat-hackathon-boilerplate)
- [Hardhat's documentation site](https://hardhat.org/getting-started/)
- [Hardhat Support Discord server](https://discord.com/invite/TETZs2KK4k)
- [Ethers.js Documentation](https://docs.ethers.io/v5/)
- [Waffle Documentation](https://getwaffle.io/)
- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)
