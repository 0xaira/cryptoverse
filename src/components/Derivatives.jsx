import React, { useState, useEffect } from 'react';

const Derivatives = () => {
  const [derivatives, setDerivatives] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDerivatives = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/derivatives');
        if (!response.ok) {
          throw new Error('Failed to fetch derivatives');
        }
        const data = await response.json();
        setDerivatives(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching derivatives:', error);
        setLoading(false);
      }
    };

    fetchDerivatives();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Derivatives</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {derivatives.map((derivative) => (
            <li key={derivative.symbol} className="border p-4 my-2 rounded-md">
              <h2 className="text-xl font-semibold">{derivative.market}</h2>
              <p className="text-gray-500">Symbol: {derivative.symbol}</p>
              <p className="text-gray-500">Price: {derivative.price}</p>
              <p className="text-gray-500">Price Change 24h: {derivative.price_percentage_change_24h}</p>
              <p className="text-gray-500">Contract Type: {derivative.contract_type}</p>
              <p className="text-gray-500">Open Interest: {derivative.open_interest}</p>
              <p className="text-gray-500">Volume 24h: {derivative.volume_24h}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Derivatives;
