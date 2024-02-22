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
            <p className='text-xl text-gray-500 mt-4 mr-28'>
CryptoVerse provides a comprehensive overview of cryptocurrencies and market insights, empowering users with efficient exploration, real-time data, and timely updates for informed investment decisions.</p>
            <h2 className='text-2xl font-bold mt-4'>Empowering Investors with Insights and Updates</h2>
            <p className='text-xl text-gray-500 mt-4 mr-28'>CryptoVerse offers sophisticated trading strategies and diverse investment opportunities through Derivatives Exchanges, while also providing insights into popular cryptocurrencies and currency conversion</p>
            <h2 className='text-2xl font-bold mt-4'>See Global Data, News, Derivates and much more </h2>
            <p className='text-xl text-gray-500 mt-4 mr-28'>Providing comprehensive cryptocurrency insights, real-time market data, and a hub for exploring investment platforms and non-fungible tokens.</p>
        </div>
    </div>
    </>
  )
}

export default AboutUs

