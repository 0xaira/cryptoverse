import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Meteors } from "../utils/ui/meteors";
import Nav from './Nav';
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
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto px-4 py-8 mt-12 bg-opacity-90 bg-slate-950  backdrop-blur-lg">
    
      <div className="bg-slate-950 shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-between items-center bg-slate-950 text-white p-4">
          <div className="flex items-center">
            <img className="w-12 h-12 object-cover mr-4" src={nft.image.small} alt={nft.name} />
            <h2 className="text-2xl font-semibold">{nft.name}</h2>
          </div>
          <div>
            <a href={nft.links.homepage} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline mr-2">Homepage</a>
            <a href={nft.links.twitter} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline mr-2">Twitter</a>
            <a href={nft.links.discord} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">Discord</a>
          </div>
        </div>
        <div className="p-6">
          <p className="text-white mb-4">{nft.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-white">Contract Address</p>
              <p className="text-lg font-semibold text-gray-400">{nft.contract_address}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Symbol</p>
              <p className="text-lg font-semibold text-gray-400">{nft.symbol}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm font-medium text-white">Floor Price (ETH)</p>
              <p className="text-lg font-semibold text-gray-400">{nft.floor_price.native_currency}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Market Cap (ETH)</p>
              <p className="text-lg font-semibold text-gray-400">{nft.market_cap.native_currency}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Volume 24h (ETH)</p>
              <p className="text-lg font-semibold text-gray-400">{nft.volume_24h.native_currency}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Floor Price (USD)</p>
              <p className="text-lg font-semibold text-gray-400">{nft.floor_price.usd}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Market Cap (USD)</p>
              <p className="text-lg font-semibold text-gray-400">{nft.market_cap.usd}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Volume 24h (USD)</p>
              <p className="text-lg font-semibold text-gray-400">{nft.volume_24h.usd}</p>
            </div>

<div className="mt-6">
  <p className="text-sm font-medium text-white">Floor Price (ETH) 7d Percentage Change</p>
  <p className="text-lg font-semibold text-gray-400">{nft.floor_price_7d_percentage_change.native_currency}%</p>
</div>
<div className="mt-6">
  <p className="text-sm font-medium text-white">Floor Price (ETH) 14d Percentage Change</p>
  <p className="text-lg font-semibold text-gray-400">{nft.floor_price_14d_percentage_change.native_currency}%</p>
</div>
<div className="mt-6">
  <p className="text-sm font-medium text-white">Floor Price (ETH) 30d Percentage Change</p>
  <p className="text-lg font-semibold text-gray-400">{nft.floor_price_30d_percentage_change.native_currency}%</p>
</div>
<div className="mt-6">
  <p className="text-sm font-medium text-white">Floor Price (ETH) 60d Percentage Change</p>
  <p className="text-lg font-semibold text-gray-400">{nft.floor_price_60d_percentage_change.native_currency}%</p>
</div>
<div className="mt-6">
  <p className="text-sm font-medium text-white">Floor Price (ETH) 1y Percentage Change</p>
  <p className="text-lg font-semibold text-gray-400">{nft.floor_price_1y_percentage_change.native_currency}%</p>
</div>

          </div>
          
          <div className="mt-6">
            <p className="text-sm font-medium text-white">Explorers</p>
            <ul className="list-disc list-inside">
              {nft.explorers.map((explorer, index) => (
                <li key={index}>
                  <a href={explorer.link} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">{explorer.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NFTItem;
