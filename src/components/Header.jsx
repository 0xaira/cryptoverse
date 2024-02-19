import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-950 w-full flex justify-between items-center text-white gap-10 h-16 '>
      <h1 className='font-bold text-2xl mt-1 ml-6'>
        CryptoVerse
      </h1>
      <ul className='flex gap-10 mt-2 text-xl mr-6'>
        <li>Coins</li>
        <li>Companies</li>
        <li>Exchanges</li>
        <li>NFTs</li>
        <li>Assets</li>
        <li>News</li>
      </ul>
    </div>
  )
}

export default Header