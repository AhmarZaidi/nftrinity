import useSWR from "swr";
import { CryptoHookFactory } from "@_types/hooks";

type AccountHookFactory = CryptoHookFactory<string, string>

export type UseAccountHook = ReturnType<AccountHookFactory>

// {...deps} => provider, etherium, contract from web3State 
export const hookfactory: AccountHookFactory = (deps) => (params) => {
    
    const swrRes = useSWR("web3/useAccount", () => {
        console.log(params)
        console.log(deps)
        return "Test"
    })

    return swrRes
} 

// export const useAccount = hookfactory({ethereum: undefined, provider: undefined});