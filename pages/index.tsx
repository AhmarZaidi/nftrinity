/* eslint-disable @next/next/no-img-element */


import type { NextPage } from 'next'
import { BaseLayout, NFTList } from '@ui'
import nfts from "../content/meta.json"
import { NftMeta } from '@_types/nft'
import { useWeb3 } from '@providers/web3'

const Home: NextPage = () => {

	const { ethereum, provider, contract } = useWeb3();

	// console.log(contract)

	const getNftInfo = async () => {
		console.log(await contract!.name())
		console.log(await contract!.symbol())
	}

	if(contract) {
		getNftInfo();
	}


	const getAccounts = async () => {
			// return await provider!.listAccounts(); // ! means provider will not be undefined when this func. is called
			const accounts = await provider!.listAccounts(); // ! means provider will not be undefined when this func. is called
			console.log(accounts[0])
	}

	if(provider) {
		getAccounts();
	}

	return (
		<BaseLayout>
			<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
				<div className="absolute inset-0">
					<div className="bg-white h-1/3 sm:h-2/3" />
				</div>
				<div className="relative">
					<div className="text-center">
						<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Home</h2>
						<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Mint a NFTs!</p>
					</div>
					<NFTList nfts={nfts as NftMeta[]} />
				</div>
			</div>
		</BaseLayout>
	)
}

export default Home