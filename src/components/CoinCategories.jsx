import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Meteors } from "../utils/ui/meteors";
import Nav from './Nav';
const CoinCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoinCategories = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/categories/list');
        if (!response.ok) {
          throw new Error('Failed to fetch coin categories');
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching coin categories:', error);
        setLoading(false);
      }
    };

    fetchCoinCategories();
  }, []);

  return (
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="container mx-auto p-4 bg-slate-950 mt-14">
      <h1 className="text-5xl font-semibold mb-6 text-amber-400 text-center">Coin Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul role="list" className="-my-2 space-y-2 grid grid-cols-4 text-white bg-slate-950">
          {categories.map((category) => (
            <li key={category.category_id} className="group relative border-l-4 border-yellow-500 pl-4 pr-8 py-4 cursor-pointer transition duration-300 ease-in-out hover:pl-6 group-hover:border-l-8">
              <h2 className="text-xl font-semibold group-hover:text-yellow-500">
                <Link to={`/categories/${category.slug}`} className="inline-block">
                  {category.name}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-gray-300 group-hover:text-gray-500">
                Category ID: {category.category_id}
              </p>
            </li>
          ))}
        </ul>
      )}
      <Meteors number={100} />
    </div>
    </>
  );
};

export default CoinCategories;
