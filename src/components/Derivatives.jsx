import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Meteors } from "../utils/ui/meteors";
import Nav from './Nav';

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
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto p-4 bg-slate-950 mt-14">
      <h1 className="text-4xl font-bold mb-6 text-amber-400 text-center">Derivatives</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-950">
            <tr>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Market
              </th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Symbol
              </th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Price Change 24h
              </th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Contract Type
              </th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Open Interest
              </th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Volume 24h
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {derivatives.map((derivative) => (
              <tr key={derivative.symbol}>
                <td className="whitespace-nowrap py-4 px-6 text-sm font-bold text-gray-400">
                  {derivative.market}
                </td>
                <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-300">
                  {derivative.symbol}
                </td>
                <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-300">
                  $ {derivative.price}
                </td>
                <td className="whitespace-nowrap py-4 px-6 text-sm text-green-500">
                  +{derivative.price_percentage_change_24h}%
                </td>
                <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-300">
                  {derivative.contract_type}
                </td>
                <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-300">
                  {derivative.open_interest}
                </td>
                <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-300">
                  $ {derivative.volume_24h}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
     <Meteors number={100} />
    </div>
    </>
  );
};

export default Derivatives;