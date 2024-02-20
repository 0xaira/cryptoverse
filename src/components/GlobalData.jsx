import React, { useState, useEffect } from 'react';

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
        const data = await response.json();
        setGlobalData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching global data:', error);
        setLoading(false);
      }
    };

    fetchGlobalData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Global Market Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Total Active Cryptocurrencies: {globalData.active_cryptocurrencies}</p>
          <p>Upcoming ICOs: {globalData.upcoming_icos}</p>
          <p>Ongoing ICOs: {globalData.ongoing_icos}</p>
          <p>Ended ICOs: {globalData.ended_icos}</p>
          <p>Total Markets: {globalData.markets}</p>
          <p>Total Market Cap (USD): ${globalData.total_market_cap.usd}</p>
          <p>Total 24h Volume (USD): ${globalData.total_volume.usd}</p>
          <p>Market Cap Percentage (BTC): {globalData.market_cap_percentage.btc}%</p>
          <p>Market Cap Change Percentage (24h USD): {globalData.market_cap_change_percentage_24h_usd}%</p>
        </div>
      )}
    </div>
  );
};

export default GlobalData;
