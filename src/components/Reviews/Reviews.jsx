import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { resultRev } from '../../services/fetch';
import css from './Reviews.module.css'

export default function Reviews() {
  const [rev, setRev] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    resultRev(movieId)
      .then(data => setRev(data.results))
      .catch(error => console.error('Error while requesting data:', error));
  }, [movieId]);

  return (
    <div className={css.reviewsBox}>
      {rev && rev.length > 0 ? (
        <p>
          {rev.map(item => (
            <li key={item.id} className={css.reviewsList}>
              <p className={css.reviewsAuthor}>Author: {item.author}</p>
              <p> {item.content}</p>
            </li>
          ))}
        </p>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
}
