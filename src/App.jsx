import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {CardHoverEffectDemo} from './components/CardHoverEffectDemo'
import TrendingCoinHome from './components/TrendingCoinHome'
import ExchangesHome from './components/ExchangesHome'
import CoinMarketCapHome from './components/CoinMarketCapHome'
import DerivativesExchangesHome from './components/DerivativesExchangesHome'
import NewsHome from './components/NewsHome'
import AboutUs from './components/AboutUs'
import {TypewriterEffectSmoothDemo} from './components/TypewriterEffectSmoothDemo'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Nav/>
     
      <div className='bg-slate-950'>
      <Hero/>
     
      <TrendingCoinHome/>
      <ExchangesHome/>
      <CoinMarketCapHome/>
      <DerivativesExchangesHome/>
      <NewsHome/>
      <AboutUs/>
      <CardHoverEffectDemo/>
      <TypewriterEffectSmoothDemo/>
      <Footer/>
      </div>
    </>
  )
}

export default App