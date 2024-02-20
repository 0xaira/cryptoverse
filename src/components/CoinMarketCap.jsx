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

  const truncateContent = (content, maxLength) => {
    if (!content) return ''; // Add null check here
  
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
  };

  return (
    <div className="container mx-auto p-4 bg-slate-950">
      <h1 className="text-5xl font-semibold mb-6 text-white text-center">Coin Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 bg-slate-950">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Market Cap</th>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">24h MC Change</th>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Volume 24h</th>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Content</th>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Top Coins</th>
            </tr>
          </thead>
          <tbody className="bg-slate-950 text-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <span className="font-semibold">{category.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">${Number(category.market_cap / Math.pow(10, 6)).toFixed(2)}M</td>
                <td className="px-6 py-4 whitespace-no-wrap">{(category.market_cap_change_24h * 100).toFixed(2)}%</td>
                <td className="px-6 py-4 whitespace-no-wrap">${(category.volume_24h / Math.pow(10, 6)).toFixed(2)}M</td>
                <td className="px-6 py-4 whitespace-no-wrap">{category.updated_at}</td>
                <td className="px-6 py-4 whitespace-no-wrap overflow-hidden overflow-ellipsis max-h-16">
                  {truncateContent(category.content, 20)}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap flex space-x-2">
                  {category.top_3_coins.slice(0, 3).map((coinUrl, index) => (
                    <img key={index} src={coinUrl} alt={`Coin ${index + 1}`} className="w-8 h-8" />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoinMarketCap;
