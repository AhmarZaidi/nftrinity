import { createContext, FunctionComponent, useContext, useEffect, useState } from "react";
import { createDefaultState, loadContract, Web3State } from "./utils";
import { ethers } from "ethers"




const Web3Context = createContext<Web3State>(createDefaultState())

// const Web3Provider: FunctionComponent = ({children}) => {

type Web3ProviderProps = {
    children: any
}

const Web3Provider: FunctionComponent<Web3ProviderProps> = ({children}) => {
    
    const[Web3Api, setWeb3Api] = useState<Web3State>(createDefaultState())

    useEffect(() => {
      const initWeb3 = async () => {
        // const ethereum = window.ethereum;

        // provider is an extension the ethereum and provides some functions and functionalities
        const provider = new ethers.providers.Web3Provider(window.ethereum as any)
        const contract = await loadContract("NftMarket", provider)

        setWeb3Api({
            ethereum: window.ethereum,
            provider: provider,
            contract: contract ,
            isLoading: false
        })
      };
      initWeb3();
    }, [])
    

    return (
        <Web3Context.Provider value={Web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context);
}

export default Web3Provider;
