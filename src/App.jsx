import React from 'react'
import Header from './components/Header'
import CoinList from './components/CoinList'
import AssetPlatforms from './components/AssetPlatforms'
import CoinCategories from './components/CoinCategories'
import CoinMarketCap from './components/CoinMarketCap'
import Exchanges from './components/Exchanges'
import NFTsList from './components/NFTList'
const App = () => {
  return (
    <>
    <Header/>
    {/* <CoinList/> */}
    {/* <AssetPlatforms/> */}
    {/* <CoinCategories/> */}
    {/* <CoinMarketCap/> */}
    {/* <Exchanges/> */}
    {/* <NFTsList/> */}
    <ul>
      <li>
        <a href="/coinlist">Coin List</a>
      </li>
      <li>
        <a href="/coincategories">Coin Categories</a>
      </li>
      <li>
        <a href="/coinmarketcap">Coin Market Cap</a>
      </li>
      <li>
        <a href="/exchanges"> Exchanges</a>
      </li>
      <li>
        <a href="/assetplatforms">Asset Platforms</a>
      </li>
      <li>
        <a href="/nfts"> NFTs</a>
      </li>
      <li>
        <a href="/derivativeexchanges">DerivativesExchanges</a>
      </li>
      <li><a href="/derivatives">Derivatives</a></li>
      <li><a href="/trending">TrendingCoins</a></li>
      <li><a href="/exchangerates">ExchangeRates</a></li>
      <li><a href="/globaldata">GlobalData</a></li>
    </ul>
    </>
  )
}

export default App


//   {path: '/derivativeexchanges', element: <DerivativesExchanges/>},
//   {path: '/derivates', element: <Derivatives/>},
//   {path: '/trending', element: <TrendingCoins/>},
//   {path: 'exchangerates', element: <ExchangeRates/>},
//   {path: 'globaldata', element: <GlobalData/>},