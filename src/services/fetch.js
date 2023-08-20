const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTdhY2E0MTIyMWNjZWE5N2E0NWJmZmRmZjgwMjg5YiIsInN1YiI6IjY0ZGY1OTlhZTE5ZGU5MDExZDVkYzljMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.397mQ4PwnH3oWpYfjEljOSPVIKATYgZQxHyFfUdQwLk';

const fetch = require('node-fetch');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const resultTrending = () => {
  const urlTrending =
    'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  return fetch(urlTrending, options)
    .then(res => res.json())
    .catch(err => console.error('Error:' + err));
};

export const resultMovieDetails = movieId => {
  const urlMovieDetails = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  return fetch(urlMovieDetails, options)
    .then(res => res.json())
    .catch(err => console.error('Error:' + err));
};

export const resultCast = movieId => {
  const urlCast = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  return fetch(urlCast, options)
    .then(res => res.json())
    .catch(err => console.error('Error:' + err));
};

export const resultRev = movieId => {
  const urlRev = `
  https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  return fetch(urlRev, options)
    .then(res => res.json())
    .catch(err => console.error('Error:' + err));
};

export const resultSearch = name => {
  const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`;
  return fetch(urlSearch, options)
    .then(res => res.json())
    .catch(err => console.error('Error:' + err));
};
