import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage';

const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route path="movies/:movieId" element={<Suspense fallback={<div>Loading...</div>}>
              <MovieDetailsPage />
            </Suspense>}>
          <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}>
              <Cast />
            </Suspense>} />
          <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}>
              <Reviews />
            </Suspense>} />
        </Route>
      </Route>
    </Routes>
  );
}
