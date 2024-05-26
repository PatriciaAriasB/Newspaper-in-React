import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './ListNews.scss';

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <div className="news">
      <h1 className="news-title">The Independent Times | News</h1>
      <ul className="news-list">
        {news.map((article, index) => (
          <li key={index} className="news-item">
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListNews;
