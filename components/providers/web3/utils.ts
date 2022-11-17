import { Contract, ethers, providers } from "ethers" // ethers-> complete and compact web3 library for interacting with the Ethereum Blockchain and its ecosystem (smart contracts). 
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

const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID;

export const loadContract = async (name: string, provider: providers.Web3Provider) : Promise<Contract> => {
    
    if(!NETWORK_ID) {
        return Promise.reject("Network ID not defined!")
    }

    const res = await fetch(`/contracts/${name}.json`)
    const Artifact = await res.json()

    // debugger
    if(Artifact.networks[NETWORK_ID].address) {
        const contract = new ethers.Contract(Artifact.networks[NETWORK_ID].address, Artifact.abi, provider)
        return contract;
    } else {
        return Promise.reject(`Contract [${name}] cannot be loaded! `)
    }
} 