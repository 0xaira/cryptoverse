// NFTList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NFTList = () => {
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/nfts/list');
        if (!response.ok) {
          throw new Error('Failed to fetch NFTs');
        }
        const data = await response.json();
        setNFTs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">NFTs List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {nfts.map((nft) => (
            <li key={nft.id} className="border p-4 my-2 rounded-md">
              <Link to={`/nfts/${nft.id}`} className="block">
                <h2 className="text-xl font-semibold">{nft.name}</h2>
                <p className="text-gray-500">Contract Address: {nft.contract_address}</p>
                <p className="text-gray-500">Asset Platform ID: {nft.asset_platform_id}</p>
                <p className="text-gray-500">Symbol: {nft.symbol}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NFTList;
