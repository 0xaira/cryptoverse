import React, { useState, useEffect } from 'react';
import { Meteors } from "../utils/ui/meteors";
import Nav from './Nav';
const AssetPlatforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssetPlatforms = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/asset_platforms');
        if (!response.ok) {
          throw new Error('Failed to fetch asset platforms');
        }
        const data = await response.json();
        setPlatforms(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching asset platforms:', error);
        setLoading(false);
      }
    };

    fetchAssetPlatforms();
  }, []);

  return (
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto p-4 bg-slate-950 mt-14">
      <h1 className="text-4xl font-bold mb-6 text-amber-400 text-center">Asset Platforms</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 bg-slate-950">
          <thead>
            <tr>
              <th className="px-6 py-3  text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3  text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3  text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Chain Identifier</th>
              <th className="px-6 py-3  text-left text-lg leading-4 font-medium text-yellow-500 uppercase tracking-wider">Native Coin ID</th>
            </tr>
          </thead>
          <tbody className="bg-slate-950 divide-y divide-gray-200 text-white ">
            {platforms.map((platform) => (
              <tr key={platform.id} className='hover:bg-slate-900'>
                <td className="px-6 py-4 whitespace-no-wrap ">
                  <span className="font-semibold">{platform.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{platform.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{platform.chain_identifier || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{platform.native_coin_id}</td>
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

export default AssetPlatforms;
