import React, { useState, useEffect } from 'react';
import { Meteors } from "../utils/ui/meteors";
import Nav from './Nav';
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
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto p-4 bg-slate-950 mt-14">
      <h1 className="text-4xl font-bold mb-6 text-amber-400 text-center">Exchange Rate</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className='text-white border-b text-bold'>
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Unit</th>
                <th className="px-4 py-2 text-left">Value</th>
                <th className="px-4 py-2 text-left">Type</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {Object.entries(exchangeRates).map(([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="px-4 py-2">{value.name}</td>
                  <td className="px-4 py-2">{value.unit}</td>
                  <td className="px-4 py-2">{value.value}</td>
                  <td className="px-4 py-2">{value.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    <Meteors number={100} />
    </>
  );
};

export default ExchangeRates;