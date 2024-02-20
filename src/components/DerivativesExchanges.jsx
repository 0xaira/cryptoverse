import React, { useState, useEffect } from 'react';

const DerivativesExchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/derivatives/exchanges');
        if (!response.ok) {
          throw new Error('Failed to fetch derivative exchanges');
        }
        const data = await response.json();
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching derivative exchanges:', error);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Derivative Exchanges</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {exchanges.map((exchange) => (
            <li key={exchange.id} className="border p-4 my-2 rounded-md">
              <h2 className="text-xl font-semibold">{exchange.name}</h2>
              <p className="text-gray-500">Open Interest BTC: {exchange.open_interest_btc}</p>
              <p className="text-gray-500">Trade Volume 24h BTC: {exchange.trade_volume_24h_btc}</p>
              <p className="text-gray-500">Number of Perpetual Pairs: {exchange.number_of_perpetual_pairs}</p>
              <p className="text-gray-500">Number of Futures Pairs: {exchange.number_of_futures_pairs}</p>
              <img src={exchange.image} alt={exchange.name} className="w-20 h-20" />
              <p className="text-gray-500">Year Established: {exchange.year_established}</p>
              <p className="text-gray-500">Country: {exchange.country || 'N/A'}</p>
              <p className="text-gray-500">Description: {exchange.description || 'N/A'}</p>
              <a href={exchange.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Exchange</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DerivativesExchanges;
