import { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

// Load env variables
require('dotenv').config()

// Load hardhat plugin for etherscan
// require("@nomiclabs/hardhat-etherscan");

const config: HardhatUserConfig & { etherscan: Record<string, string> } = {
  defaultNetwork: "hardhat",
  solidity: { compilers: [{ version: "0.8.4", settings: {} }] },
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_RINKEBY_PROJECT_ID}`,
      accounts: [`0x${process.env.METAMASK_RINKEBY_PRIVATE_KEY}`],
    },
  },
  etherscan: { apiKey: `${process.env.ETHERSCAN_API_KEY}` },
};
export default config;

// npx hardhat verify-contract --contract-name Counter --address 0x62c4B86FBc34F585dFfd16d8A8A5711Dc7919e7A
// npx buidler verify-contract --contract-name Counter --address 0x62c4B86FBc34F585dFfd16d8A8A5711Dc7919e7A