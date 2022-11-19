import { Contract, ethers, providers } from "ethers" // ethers-> complete and compact web3 library for interacting with the Ethereum Blockchain and its ecosystem (smart contracts). 
import { MetaMaskInpageProvider } from "@metamask/providers"; // metamask/providers provide types for ehereum 
import { setupHooks, Web3Hooks } from "@hooks/web3/setupHooks";
import { Web3Dependencies } from "@_types/hooks";

// globally extend window type
declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider;
    }
}

// export type Web3Params = {
//     ethereum: MetaMaskInpageProvider | null;
//     provider: providers.Web3Provider | null;
//     contract: Contract | null
// } // ? after var means it could be undefined initially

type Nullable<T> = {
    [P in keyof T]: T[P] | null
}

export type Web3State = {
    isLoading: boolean; // true means Web3State is loading
    hooks: Web3Hooks
} & Nullable<Web3Dependencies>

// initialize values of Web3Params
export const createDefaultState = () => {
    return {
        ethereum: null,
        provider: null,
        contract: null,
        hooks: setupHooks({} as any),
        isLoading: true,
    }
} 

// initialize hooks 
export const createWeb3State = ({ethereum, provider, contract, isLoading}: Web3Dependencies & {isLoading: boolean}) => {
    return {
        ethereum,
        provider,
        contract,
        isLoading,
        hooks: setupHooks({ethereum, provider, contract}),
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