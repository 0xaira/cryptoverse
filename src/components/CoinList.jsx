import React, { useState, useEffect } from 'react';
import { Meteors } from "../utils/ui/meteors";
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
    <div className="container mx-auto p-4 bg-slate-950">
      <h1 className="text-5xl font-bold mb-4 text-white text-center">Coin List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className=''>
            <tr>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">Coin Name</th>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 bg-slate-950 text-left text-lg leading-4 font-medium text-white uppercase tracking-wider">ID</th>
            </tr>
          </thead>
          <tbody className="bg-slate-950 divide-y divide-gray-200 text-white">
            {coins.map((coin) => (
              <tr key={coin.id} className='hover:bg-slate-900'>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <span className="font-semibold">{coin.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{coin.symbol}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{coin.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Meteors number={100} />
    </div>
  );
};

export default CoinList;