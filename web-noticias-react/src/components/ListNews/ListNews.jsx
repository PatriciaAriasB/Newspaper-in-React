import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import './ListNews.scss'

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <div>
      <h1>List News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
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
