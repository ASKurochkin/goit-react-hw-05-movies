import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { resultSearch } from '../../services/fetch';
import css from './Movies.module.css';

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.searchList}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [status, setStatus] = useState('');

  const query = searchParams.get('query') || '';

  const checkSearchParam = (evt) => {
    const inputValue = evt.target.value;
    setSearchParams({ query: inputValue });
  };

  const getMovies = () => {
    if (query) {
      
      resultSearch(query)
        .then((data) => setFoundMovies(data.results))
        .catch(() => {
          setStatus('An error occurred while fetching data.');
        });
    }
  };

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault()
      getMovies();
    }
  };

  return (
    <div className={css.searchBox}>
      <form>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search the movie"
          name="search"
          onChange={checkSearchParam}
          onKeyPress={handleKeyPress}
          value={query}
        />
        <button type="button" onClick={getMovies}>
          Search
        </button>
      </form>
      {status ? <p>{status}</p> : foundMovies.length > 0 ? <MovieList movies={foundMovies} /> : ""}
    </div>
  );
}
