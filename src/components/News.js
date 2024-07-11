import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const News = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://news-api14.p.rapidapi.com/v2/trendings?topic=Climate&language=en',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'news-api14.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
          setNewsArticles(response.data.data);
        } else {
          setError('Failed to fetch news. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-page">
      <Header />
      <div className="container-news">
        <h1>Trending Climate News</h1>
        {loading ? (
          <p>Loading news articles...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="news-articles">
            {newsArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card"
              >
                <div className="news-content">
                  <div className="news-details">
                    <h2 className="news-title">{article.title}</h2>
                    <p className="news-excerpt">{article.excerpt}</p>
                    <p className="news-publisher">
                      {article.authors ? `By ${article.authors.join(', ')}` : 'Unknown Author'} | {article.publisher ? article.publisher.name : 'Unknown Publisher'}
                    </p>
                  </div>
                  {article.thumbnail && (
                    <img src={article.thumbnail} alt={article.title} className="news-image" />
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default News;
