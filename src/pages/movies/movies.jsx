import React, { useEffect, useState } from 'react';
import SearchForm from '../../components/searchForm/searchForm';
import Container from '../../components/container/container';
import MovieList from '../../components/moviesMenu/moviesList/moviesList';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmsByName } from '../../apiMovie/ApiMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  useEffect(() => {
    if (query) {
      try {
        fetchFilmsByName(query).then(data => {
          if (data.results.length === 0) {
            setSearchParams('');
          }
          setMovies(data.results);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query, setSearchParams]);

  const handleSubmit = query => {
    setQuery(query);
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <main>
      <Container>
        <SearchForm onSubmit={handleSubmit} query={query} />
        {movies.length > 0 && <MovieList movies={movies} />}
      </Container>
    </main>
  );
};

export default Movies;
