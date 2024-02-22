import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Meteors } from "../utils/ui/meteors";
const ExchangesHome = () => {
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
        setExchanges(data.slice(0, 10));

        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchanges:', error);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto p-4 bg-slate-950 text-white mt-4">
      <h1 className="text-5xl font-bold mb-8 text-amber-400 text-center">Exchanges</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {exchanges.map((exchange) => (
            <div key={exchange.id} className="border rounded-xl overflow-hidden group cursor-pointer transform transition duration-200 hover:-translate-y-1 hover:scale-110">
              <img src={exchange.image} alt={exchange.name} className="w-full h-40 object-cover rounded-t-xl" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{exchange.name}</h2>
                <p className="text-gray-400">Year Established: {exchange.year_established}</p>
                <p className="text-gray-400">Country: {exchange.country}</p>
                {/* <p className="text-gray-500">{exchange.description}</p> */}
                <p className="text-gray-400">Trade Volume 24h BTC: {exchange.trade_volume_24h_btc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Meteors number={100} />
    </>
  );
};

export default ExchangesHome;