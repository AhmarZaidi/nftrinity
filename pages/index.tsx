// import type { NextPage } from "next"
// import { BaseLayout } from "../components"


// const Home : NextPage = () => {
//   return (
//     <BaseLayout>
//       <div className="underline">
//         hello
//       </div>
//     </BaseLayout>
//   )
// }

// export default Home

/* eslint-disable @next/next/no-img-element */


import type { NextPage } from 'next'
import { BaseLayout } from '../components'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Home</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Mint a NFTs!
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className={`h-full w-full object-cover`}
                  src={"public\\images\\nft1.png"}
                  alt="New NFT"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-400">
                    Creatures NFT
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">NFT #1</p>
                    <p className="mt-3 mb-3 text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </div>
                <div className="overflow-hidden mb-4">
                  <dl className="-mx-4 -mt-4 flex flex-wrap">
                    <div className="flex flex-col px-4 pt-4">
                      <dt className="order-2 text-sm font-medium text-gray-500">Price</dt>
                      <dd className="order-1 text-xl font-extrabold text-red-400">
                        <div className="flex justify-center items-center">
                          100
                          {/* <img className="h-6" src="/images/small-eth.webp"/> */}
                          ETH
                        </div>
                      </dd>
                    </div>
                    <div className="flex flex-col px-4 pt-4">
                      <dt className="order-2 text-sm font-medium text-gray-500">Attribute 1</dt>
                      <dd className="order-1 text-xl font-extrabold text-red-400">100</dd>
                    </div>
                    <div className="flex flex-col px-4 pt-4">
                      <dt className="order-2 text-sm font-medium text-gray-500">Attribute 2</dt>
                      <dd className="order-1 text-xl font-extrabold text-red-400">40</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <button
                    type="button"
                    className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed mr-2 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home