import React, { useState, useEffect } from 'react';

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Asset Platforms</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {platforms.map((platform) => (
            <li key={platform.id} className="border p-4 my-2 rounded-md">
              <h2 className="text-xl font-semibold">{platform.name}</h2>
              <p className="text-gray-500">ID: {platform.id}</p>
              <p className="text-gray-500">Chain Identifier: {platform.chain_identifier || 'N/A'}</p>
              <p className="text-gray-500">Native Coin ID: {platform.native_coin_id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AssetPlatforms;
