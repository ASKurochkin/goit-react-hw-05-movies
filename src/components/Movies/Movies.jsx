import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { resultSearch } from '../../services/fetch';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [status, setStatus] = useState('');
  const name = searchParams.toString() || '';

  const checkSearchParam = evt => {
    const checkParam =
      evt.target.value !== '' ? { movie: evt.target.value } : {};
    setSearchParams(checkParam);
  };

  const getMovies = () => {
    resultSearch(name)
      .then(data => setFoundMovies(data.results))
      .catch(() => {
        setStatus('error');
      });
  };

  const markup =
    foundMovies.length > 0
      ? foundMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })
      : <p>Not found this movie</p>;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search the movie"
          name="search"
          onChange={checkSearchParam}
        />
        <button
          type="button"
          onClick={() => {
            getMovies();
          }}
        >
          Search
        </button>
      </form>
      {status !== 'error' ? markup : <p>Not found</p>}
    </div>
  );
}
