import React, { useState, useEffect } from 'react';

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Coin Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category.category_id} className="border p-4 my-2 rounded-md">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-gray-500">Category ID: {category.category_id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoinCategories;
