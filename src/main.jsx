import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Lazy load components
const LazyNFTList = lazy(() => import('./components/NFTList.jsx'));
const LazyNFTItem = lazy(() => import('./components/NFTItem.jsx'));
const LazyCoinList = lazy(() => import('./components/CoinList.jsx'));
const LazyCoinCategories = lazy(() => import('./components/CoinCategories.jsx'));
const LazyCoinMarketCap = lazy(() => import('./components/CoinMarketCap.jsx'));
const LazyExchanges = lazy(() => import('./components/Exchanges.jsx'));
const LazyAssetPlatforms = lazy(() => import('./components/AssetPlatforms.jsx'));
const LazyDerivativesExchanges = lazy(() => import('./components/DerivativesExchanges.jsx'));
const LazyDerivatives = lazy(() => import('./components/Derivatives.jsx'));
const LazyTrendingCoins = lazy(() => import('./components/TrendingCoins.jsx'));
const LazyExchangeRates = lazy(() => import('./components/ExchangeRates.jsx'));
const LazyGlobalData = lazy(() => import('./components/GlobalData.jsx'));

const appRouter = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/nfts', element: <Suspense fallback={<div>Loading...</div>}><LazyNFTList /></Suspense> },
  { path: '/nfts/:id', element: <Suspense fallback={<div>Loading...</div>}><LazyNFTItem /></Suspense> },
  { path: '/coinlist', element: <Suspense fallback={<div>Loading...</div>}><LazyCoinList /></Suspense> },
  { path: '/coincategories', element: <Suspense fallback={<div>Loading...</div>}><LazyCoinCategories /></Suspense> },
  { path: '/coinmarketcap', element: <Suspense fallback={<div>Loading...</div>}><LazyCoinMarketCap /></Suspense> },
  { path: '/exchanges', element: <Suspense fallback={<div>Loading...</div>}><LazyExchanges /></Suspense> },
  { path: '/assetplatforms', element: <Suspense fallback={<div>Loading...</div>}><LazyAssetPlatforms /></Suspense> },
  { path: '/derivativeexchanges', element: <Suspense fallback={<div>Loading...</div>}><LazyDerivativesExchanges /></Suspense> },
  { path: '/derivatives', element: <Suspense fallback={<div>Loading...</div>}><LazyDerivatives /></Suspense> },
  { path: '/trending', element: <Suspense fallback={<div>Loading...</div>}><LazyTrendingCoins /></Suspense> },
  { path: '/exchangerates', element: <Suspense fallback={<div>Loading...</div>}><LazyExchangeRates /></Suspense> },
  { path: '/globaldata', element: <Suspense fallback={<div>Loading...</div>}><LazyGlobalData /></Suspense> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
);
