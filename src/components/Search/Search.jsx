import { useSearchParams, Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import resultSearch from '../../services/fetch';

export default function Search () {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [status, setStatus] = useState('');
  const params = searchParams.get('movie') ?? '';


  const checkSearchParam = evt => {
    const checkParam =
      evt.target.value !== '' ? { movie: evt.target.value } : {};
    setSearchParams(checkParam);
  };

  const getMovies = () => {
    resultSearch(params)
      .then(data => setFoundMovies(data.results))
      .catch(() => {
        setStatus('error');
      });
  };

  useEffect(() => {
    console.log(foundMovies);
  }, [foundMovies]);

  const markup =
    foundMovies !== []
      ? foundMovies.map(
          ({ id, title, poster_path, vote_average, release_date }) => {
            const parts = release_date.split('-');
            const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
            return (
             <li key={id}>
              <Link to={`/movies/${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  />

                    <p style={{ fontSize: 24 }}>{title}</p>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      <p /> rating: {vote_average.toFixed(2)}
                    </p>
                    <p style={{ textAlign: 'center' }}>
                      Movie release data: {formattedDate}
                    </p>  
              </Link>
             </li>

            );
          }
        )
      : null;

  return (
    <>
      <InputWrap>
        <Input
          type="text"
          name="search"
          value={params}
          onChange={checkSearchParam}
        />
        <IconWrap
          onClick={() => {
            getMovies();
          }}
        >
          <IoSearchOutline style={{ width: 30, height: 30 }} />
        </IconWrap>
      </InputWrap>
      {status !== 'error' ? <ListFilm>{markup}</ListFilm> : <p>Not found</p>}
    </>
  );
};