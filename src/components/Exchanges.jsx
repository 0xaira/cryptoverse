import React, { useState, useEffect } from 'react';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/exchanges');
        if (!response.ok) {
          throw new Error('Failed to fetch exchanges');
        }
        const data = await response.json();
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchanges:', error);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Exchanges</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {exchanges.map((exchange) => (
            <li key={exchange.id} className="border p-4 my-2 rounded-md">
              <h2 className="text-xl font-semibold">{exchange.name}</h2>
              <p className="text-gray-500">Year Established: {exchange.year_established}</p>
              <p className="text-gray-500">Country: {exchange.country}</p>
              <p className="text-gray-500">Description: {exchange.description}</p>
              <p className="text-gray-500">Trade Volume 24h BTC: {exchange.trade_volume_24h_btc}</p>
              <img src={exchange.image} alt={exchange.name} className="w-32 h-32 mt-4" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Exchanges;
