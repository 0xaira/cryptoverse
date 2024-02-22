import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Meteors } from "../utils/ui/meteors";
import Nav from './Nav';
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
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto p-4 bg-slate-950 mt-14">
      <h1 className="text-4xl font-bold mb-6 text-amber-400 text-center">NFTs List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 bg-slate-950">
          <thead className="bg-slate-950">
            <tr>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wide">Name</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wide">Contract Address</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wide">Asset Platform ID</th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wide">Symbol</th>
            </tr>
          </thead>
          <tbody className="bg-slate-950  divide-y divide-gray-200 text-white ">
            {nfts.map((nft) => (
              <tr key={nft.id}>
                <td className="py-4 px-6">
                  <Link to={`/nfts/${nft.id}`} className="font-medium text-amber-300 hover:underline">
                    {nft.name}
                  </Link>
                </td >
                <td className="py-4 px-6">{nft.contract_address}</td>
                <td className="py-4 px-6">{nft.asset_platform_id}</td>
                <td className="py-4 px-6">{nft.symbol}</td>
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

export default NFTList;