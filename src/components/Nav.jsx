import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  const links = [
    { name: 'Coin List', link: '/coinlist' },
    { name: 'Coin Categories', link: '/coincategories' },
    { name: 'Coin Market Cap', link: '/coinmarketcap' },
    { name: 'Exchanges', link: '/exchanges' },
    { name: 'Asset Platforms', link: '/assetplatforms' },
    { name: 'NFTs', link: '/nfts' },
    { name: 'DerivativesExchanges', link: '/derivativeexchanges' },
    { name: 'Derivatives', link: '/derivatives' },
    { name: 'TrendingCoins', link: '/trending' },
    { name: 'ExchangeRates', link: '/exchangerates' },
    { name: 'GlobalData', link: '/globaldata' },
    { name: 'News', link: '/news' },
  ];

  const [open, setOpen] = useState(false);

  const firstHalf = links.slice(0, 6);
  const secondHalf = links.slice(6);

  return (
    <div className='shadow-4xl w-full fixed top-0 left-0 bg-slate-950'>
      <div className='md:flex items-center justify-between bg-slate-900 py-4 md:px-10 px-7'>
        <div className='flex items-center space-x-8'>
          <ul className='flex items-center space-x-8'>
            {firstHalf.map((link) => (
              <li key={link.name} className='text-sm'>
                <Link to={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</Link>
              </li>
            ))}
          </ul>

          <Link to={'/'}>
      <div className='font-bold text-xl text-white'>𝗖𝗿𝘆𝗽𝘁𝗼𝗩𝗲𝗿𝘀𝗲</div>
    </Link>

          <ul className='flex items-center space-x-8'>
            {secondHalf.map((link) => (
              <li key={link.name} className='text-sm'>
                <Link to={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl md:hidden'>
          <FaBars name={open ? 'close' : 'menu'} />
        </div>

       
      </div>
    </div>
  );
};

export default Nav;
