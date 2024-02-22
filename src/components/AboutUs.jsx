import React from 'react'
import about from '../img/about-banner.png'
const AboutUs = () => {
  return (
    <>
    <div className='flex mt-24 ml-28'>
        <div className='w-4/5'>
        <img src={about} width="748" height="436" loading="lazy" alt="about banner"
            className=" mt-14" />
        </div>
        <div className='text-white'>
            <h1 className='text-5xl font-bold'>What Is CryptoVerse</h1>
            <p className='text-xl text-gray-500 mt-4 mr-28'>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
            <h2 className='text-2xl font-bold mt-4'>View real-time cryptocurrency prices</h2>
            <p className='text-xl text-gray-500 mt-4 mr-28'>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
            <h2 className='text-2xl font-bold mt-4'>Buy and sell BTC, ETH, XRP, OKB, Etc...</h2>
            <p className='text-xl text-gray-500 mt-4 mr-28'>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
        </div>
    </div>
    </>
  )
}

export default AboutUs

