import React, { useState, useEffect } from 'react';
import Nav from './Nav';
const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e810f2a74dmshc319637ce06720bp1e0852jsn26765dd56bda',
		'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
	}
};

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNews(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <>
    <div className='z-20 fixed'><Nav/></div>
    <div className="px-4 bg-slate-950">
      <h1 className="text-3xl font-bold mb-5 text-amber-400 text-center  mt-14 ">Crypto News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-white" >
        {news.map((article, index) => (
          <div key={index} className="w-full sm:w-[300px] lg:w-[220px] md:w-[220px] group rounded-xl overflow-hidden hover:shadow-lg cursor-pointer mx-auto my-4 text-white">
            <img src={article.thumbnail} alt={article.title} className="w-full h-[210px] lg:h-[140px] md:h-[140px] rounded-t-xl object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{truncateText(article.title, 20)}</h2>
              <p className="text-gray-400 text-sm">{truncateText(article.description, 20)}</p>
              <p className="text-gray-400 text-xs mt-2">Published on {new Date(article.createdAt).toDateString()}</p>
            </div>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="block text-center bg-yellow-500 text-white py-2 hover:bg-yellow-600 text-sm uppercase font-semibold tracking-wider">Read More</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default News;
