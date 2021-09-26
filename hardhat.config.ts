import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";
// Load hardhat plugins:
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

// Load env variables
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

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
