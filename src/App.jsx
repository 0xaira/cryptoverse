import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {MeteorsDemo} from './components/MeteorsDemo'
import {BackgroundGradientDemo} from './components/BackgroundGradientDemo'
const App = () => {
  return (
    <>
    <div className=''>
      <Nav/>
      <Hero/>
      {/* <MeteorsDemo/> */}
      <div className='flex gap-6'>
      <BackgroundGradientDemo/>
      
      </div>
    </div>
    </>
  )
}

export default App