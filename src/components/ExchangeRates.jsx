import React, { useState, useEffect } from 'react';

const ExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/exchange_rates');
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        const data = await response.json();
        setExchangeRates(data.rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Exchange Rates</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.entries(exchangeRates).map(([key, value]) => (
            <li key={key} className="border p-4 my-2 rounded-md">
              <h2 className="text-xl font-semibold">{value.name}</h2>
              <p className="text-gray-500">Unit: {value.unit}</p>
              <p className="text-gray-500">Value: {value.value}</p>
              <p className="text-gray-500">Type: {value.type}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExchangeRates;
