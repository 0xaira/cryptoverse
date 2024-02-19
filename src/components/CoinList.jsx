import React, { useState, useEffect } from 'react';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-white">Coin List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {coins.map((coin) => (
            <div key={coin.id} className="border p-4 rounded-md hover:shadow-lg bg-gray-800">
              <h2 className="text-xl font-semibold text-white">Coin Name - {coin.name}</h2>
              <p className="text-gray-400">Coin Symbol - {coin.symbol}</p>
              <p className="text-gray-400">Coin ID - {coin.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoinList;
