import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { resultMovieDetails } from '../../services/fetch';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    resultMovieDetails(movieId)
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error while requesting data:', error));
  }, [movieId]);

  const {
    id,
    title,
    name,
    genres,
    vote_average,
    poster_path,
    overview,
    release_date,
  } = movieDetails;

  return (
    <>
      <button>
        <Link to="/">Go back</Link>
      </button>

      <div key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
        />
        <h1>
          {title || name} ({release_date})
        </h1>
        <p>User Score: {(Number(vote_average) * 10).toFixed(2)}%</p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        {genres && genres.length > 0 ? (
          <p>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        ) : (
          <p>No genres available</p>
        )}
      </div>
    </>
  );
}
