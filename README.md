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
