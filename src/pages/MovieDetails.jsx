import { Outlet } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import AddInfo from '../components/AdditInfo/AdditInfo';

export default function MovieDetailsPage() {
  return (
    <div>
      <MovieDetails />
      <AddInfo />
      <Outlet />
    </div>
  );
}
