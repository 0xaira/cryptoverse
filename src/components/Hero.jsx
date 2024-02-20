import React from 'react';
import hero from '../img/hero-banner.png';
const Hero = () => {
  return (
    <div className='bg-slate-900 mt-14 flex justify-between w-full h-[673px]  items-center gap-32'>
      <div className=' text-white flex flex-col gap-12 w-2/3 ml-20'>
        <div className='text-[60px] font-bold leading-tight'>
          <h1>Buy & Sell Digital Assets In The Cryptex</h1>
        </div>
        <div>
           <h3 className='text-[20px] font-semibold'>Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.</h3>
        </div>
      </div>
      <div className=' w-2/3'>
        <img src={hero} alt='hero' className='w-100 h-[448px]' />
      </div>
    </div>
  );
};

export default Hero;
