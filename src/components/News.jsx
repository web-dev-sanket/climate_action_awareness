import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Access the API key from environment variable

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=climate&apiKey=1f24857ada8f466896c105f3694539b3`
        );
        setArticles(response.data.articles.slice(0, 15));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [apiKey]);

  return (
    <section id="news" className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-8">
        Latest News on Climate
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.url}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
            )}
            <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <a
              href={article.url}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
