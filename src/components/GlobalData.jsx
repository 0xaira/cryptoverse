import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Nav from './Nav';
const GlobalData = () => {
  const [globalData, setGlobalData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/global');
        if (!response.ok) {
          throw new Error('Failed to fetch global data');
        }
        const { data } = await response.json();
        setGlobalData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching global data:', error);
        setLoading(false);
      }
    };

    fetchGlobalData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-8">Global Market Data</h1>
      {loading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin mr-2" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fas fa-coins"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Active Cryptocurrencies</p>
              <p className="text-2xl text-gray-600 font-bold">{globalData.active_cryptocurrencies}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Upcoming ICOs</p>
              <p className="text-2xl text-gray-600 font-bold">{globalData.upcoming_icos}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Ongoing ICOs</p>
              <p className="text-2xl text-gray-600 font-bold">{globalData.ongoing_icos}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fas fa-calendar-times"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Ended ICOs</p>
              <p className="text-2xl text-gray-600 font-bold">{globalData.ended_icos}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Markets</p>
              <p className="text-2xl text-gray-600 font-bold">{globalData.markets.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Market Cap (USD)</p>
              <p className="text-2xl text-gray-600 font-bold">${globalData.total_market_cap.usd.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total 24h Volume (USD)</p>
              <p className="text-2xl text-gray-600 font-bold">${globalData.total_volume.usd.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fab fa-btc"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Market Cap Percentage (BTC)</p>
              <p className="text-2xl text-gray-600 font-bold">{globalData.market_cap_percentage.btc}%</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-4xl text-blue-500 mr-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Market Cap Change Percentage (24h USD)</p>
              <p className={`text-2xl font-bold ${globalData.market_cap_change_percentage_24h_usd > 0 ? 'text-green-500' : 'text-red-500'}`}>{globalData.market_cap_change_percentage_24h_usd}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalData;