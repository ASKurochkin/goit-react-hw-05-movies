import { Link, Outlet } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  return (
    <div>
      <MovieDetails />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
        <Outlet />
    </div>
  );
}
