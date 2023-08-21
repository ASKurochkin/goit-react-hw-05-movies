import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resultTrending } from '../../services/fetch';
import css from './Home.module.css'

export default function Home() {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    resultTrending()
      .then(data => setTrendingData(data.results))
      .catch(error => console.error('Error while requesting data:', error));
  }, []);


  return (
    <div>
      <h1>Trending Today</h1>
      <ul className={css.filmList}>
        {trendingData.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title || item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}