import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { resultMovieDetails } from '../../services/fetch';
import css from './MovieDetails.module.css';

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

  const releaseYear = release_date ? release_date.split('-')[0] : '';

  return (
    <>
      <button className={css.btnBack}>
        <Link to="/" className={css.linkBack}>
          Go back
        </Link>
      </button>

      <div key={id} className={css.filmCard}>
        <img
          className={css.filmPoster}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
        />
        <div className={css.filmInfo}>
          <h1>
            {title || name} ({releaseYear})
          </h1>
          <p>User Score: {(Number(vote_average) * 10).toFixed(2)}%</p>
          <p className={css.filmSubtitle}>Overview</p>
          <p>{overview}</p>
          <p className={css.filmSubtitle}>Genres</p>
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
      </div>
    </>
  );
}
