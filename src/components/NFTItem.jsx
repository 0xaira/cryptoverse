// NFTItem.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NFTItem = () => {
  const { id } = useParams();
  const [nft, setNFT] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/nfts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch NFT');
        }
        const data = await response.json();
        setNFT(data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching NFT with ID ${id}:`, error);
        setLoading(false);
      }
    };

    fetchNFT();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!nft) {
    return <p>NFT not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">{nft.name}</h1>
      <p>Contract Address: {nft.contract_address}</p>
      <p>Asset Platform ID: {nft.asset_platform_id}</p>
      <p>Symbol: {nft.symbol}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default NFTItem;
