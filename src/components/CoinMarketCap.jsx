import React, { useState, useEffect } from 'react';

const CoinMarketCap = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoinMarketCap = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch coin categories');
        }
        const data = await response.json();
        console.log(data);
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching coin categories:', error);
        setLoading(false);
      }
    };

    fetchCoinMarketCap();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Coin Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="border p-4 my-2 rounded-md">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-gray-500">Market Cap: {category.market_cap}</p>
              <p className="text-gray-500">24h Market Cap Change: {category.market_cap_change_24h}</p>
              <p className="text-gray-500">Volume 24h: {category.volume_24h}</p>
              <p className="text-gray-500">Updated At: {category.updated_at}</p>
              <p className="text-gray-500">Content: {category.content}</p>
              <div className="flex space-x-4 mt-4">
                {category.top_3_coins.map((coinUrl, index) => (
                  <img key={index} src={coinUrl} alt={`Coin ${index + 1}`} className="w-8 h-8" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoinMarketCap;
