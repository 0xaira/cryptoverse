import React, { useState, useEffect } from 'react';
import { Meteors } from "../utils/ui/meteors";
import Nav from './Nav';
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
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto p-4 bg-slate-950 mt-14">
      <h1 className="text-4xl font-bold mb-6 text-amber-400 text-center">Derivative Exchanges</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {exchanges.map((exchange) => (
            <div key={exchange.id} className="border rounded-xl overflow-hidden group cursor-pointer transform transition duration-200 hover:-translate-y-1 hover:scale-110">
              <img src={exchange.image} alt={exchange.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{exchange.name}</h2>
                <p className="text-gray-300">Open Interest BTC: {exchange.open_interest_btc}</p>
                <p className="text-gray-300">Trade Volume 24h BTC: {exchange.trade_volume_24h_btc}</p>
                <p className="text-gray-300">Number of Perpetual Pairs: {exchange.number_of_perpetual_pairs}</p>
                <p className="text-gray-300">Number of Futures Pairs: {exchange.number_of_futures_pairs}</p>
                <p className="text-gray-300">Year Established: {exchange.year_established}</p>
                <p className="text-gray-300">Country: {exchange.country || 'N/A'}</p>
                {/* <p className="text-gray-300">Description: {exchange.description || 'N/A'}</p> */}
                <a href={exchange.url} target="_blank" rel="noopener noreferrer" className="block text-amber-300 hover:underline mt-2">Visit Exchange</a>
              </div>
            </div>
          ))}
        </div>
      )}
     <Meteors number={100} />
    </div>
    </>
  );
};

export default DerivativesExchanges;