import React from 'react';
import hero from '../img/hero-banner.png';
const Hero = () => {
  return (
    <div className='bg-slate-950 mt-14 flex justify-between w-full h-[673px]  items-center gap-24'>
      <div className=' text-white flex flex-col gap-12 w-2/3 ml-20'>
        <div className='text-[60px] font-bold leading-tight'>
          <h1>Get real Insights in CrytoVerse</h1>
        </div>
        <div>
           <h3 className='text-[20px] font-semibold'>Providing comprehensive cryptocurrency insights, real-time market data, and a hub for exploring investment platforms and non-fungible tokens.</h3>
        </div>
      </div>
      <div className=' w-2/3'>
        <img src={hero} alt='hero' className='w-100 h-[448px]' />
      </div>
    </div>
  );
};

export default Hero;
