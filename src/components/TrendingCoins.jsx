import React, { useState, useEffect } from 'react';

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Trending Coins</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trendingCoins.map((coin) => (
            <li key={coin.item.id} className="border p-4 my-2 rounded-md">
              <img src={coin.item.thumb} alt={coin.item.name} className="w-10 h-10 mr-4 inline-block" />
              <div className="inline-block">
                <h2 className="text-xl font-semibold">{coin.item.name}</h2>
                <p className="text-gray-500">{coin.item.symbol}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrendingCoins;
