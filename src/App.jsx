import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {MeteorsDemo} from './components/MeteorsDemo'
import {BackgroundGradientDemo} from './components/BackgroundGradientDemo'
import {CardHoverEffectDemo} from './components/CardHoverEffectDemo'
import TrendingCoinHome from './components/TrendingCoinHome'
import ExchangesHome from './components/ExchangesHome'
import CoinMarketCapHome from './components/CoinMarketCapHome'
import DerivativesExchangesHome from './components/DerivativesExchangesHome'
import NewsHome from './components/NewsHome'
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
      <CardHoverEffectDemo/>
      </div>
    </>
  )
}

export default App