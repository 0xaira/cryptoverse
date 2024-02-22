import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {MeteorsDemo} from './components/MeteorsDemo'
import {BackgroundGradientDemo} from './components/BackgroundGradientDemo'
import {CardHoverEffectDemo} from './components/CardHoverEffectDemo'
const App = () => {
  return (
    <>
      <Nav/>
      <div className='bg-slate-950'>
      <Hero/>
      
      <CardHoverEffectDemo/>
      </div>
    </>
  )
}

export default App