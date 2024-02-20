import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-slate-950 w-full flex justify-between items-center text-white gap-10 h-16 '>
      <h1 className='font-bold text-2xl mt-1 ml-6'>
        CryptoVerse
      </h1>
      <ul className='flex gap-10 mt-2 text-sm mr-6'>
        <li><Link to="/coinlist">Coin List</Link></li>
        <li><Link to="/coincategories">Coin Categories</Link></li>
        <li><Link to="/coinmarketcap">Coin Market Cap</Link></li>
        <li><Link to="/exchanges">Exchanges</Link></li>
        <li><Link to="/assetplatforms">Asset Platforms</Link></li>
        <li><Link to="/nfts">NFTs</Link></li>
        <li><Link to="/derivativeexchanges">DerivativesExchanges</Link></li>
        <li><Link to="/derivatives">Derivatives</Link></li>
        <li><Link to="/trending">TrendingCoins</Link></li>
        <li><Link to="/exchangerates">ExchangeRates</Link></li>
        <li><Link to="/globaldata">GlobalData</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
    </div>
  );
};

export default Header;
