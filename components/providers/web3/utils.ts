import { Contract, providers } from "ethers" // ethers-> complete and compact web3 library for interacting with the Ethereum Blockchain and its ecosystem (smart contracts). 
import { MetaMaskInpageProvider } from "@metamask/providers"; // metamask/providers provide types for ehereum 

// globally extend window type
declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider;
    }
}

export type Web3Params = {
    ethereum: MetaMaskInpageProvider | null;
    provider: providers.Web3Provider | null;
    contract: Contract | null
} // ? after var means it could be undefined initially

export type Web3State = {
    isLoading: boolean; // true means Web3State is loading
} & Web3Params

// initialize values of Web3Params
export const createDefaultState = () => {
    return {
        ethereum: null,
        provider: null,
        contract: null,
        isLoading: true,
    }
} 