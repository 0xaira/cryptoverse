import React, { useState, useEffect } from 'react';
import Nav from './Nav';
const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        if (!response.ok) {
          throw new Error('Failed to fetch trending coins');
        }
        const data = await response.json();
        setTrendingCoins(data.coins);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);
  
  return (
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto p-4 bg-slate-950 mt-14">
      <h1 className="text-4xl font-bold mb-6 text-amber-400 text-center">Trending Coins</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead >
              <tr className="bg-slate-950 text-left text-white border-b">
                <th className="px-4 py-2 font-bold">Name</th>
                <th className="px-4 py-2 font-bold">Symbol</th>
                <th className="px-4 py-2 font-bold">Price (BTC)</th>
                <th className="px-4 py-2 font-bold">Market Cap Rank</th>
                <th className="px-4 py-2 font-bold">Price</th>
                <th className="px-4 py-2 font-bold">Total Volume</th>
                <th className="px-4 py-2 font-bold">Market Cap</th>
                <th className="px-4 py-2 font-bold">Sparkline</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {trendingCoins.map((coin) => (
                <tr key={coin.item.id}>
                  <td className="px-4 py-2 border-b">{coin.item.name}</td>
                  <td className="px-4 py-2 border-b">{coin.item.symbol}</td>
                  <td className="px-4 py-2 border-b">{coin.item.price_btc}</td>
                  <td className="px-4 py-2 border-b">{coin.item.market_cap_rank}</td>
                  <td className="px-4 py-2 border-b">{coin.item.data.price}</td>
                  <td className="px-4 py-2 border-b">{coin.item.data.total_volume}</td>
                  <td className="px-4 py-2 border-b">{coin.item.data.market_cap}</td>
                  <td className="px-4 py-2 border-b"><img src={coin.item.data.sparkline} alt="Sparkline" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

    </>
  );
};

export default TrendingCoins;