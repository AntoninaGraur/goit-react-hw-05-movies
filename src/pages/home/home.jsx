
import React from 'react';

import Container from '../../components/container/container';
import { fetchTrendingFilms } from '../../apiMovie/ApiMovie';
import { useState, useEffect } from 'react';
import MovieList from '../../components/moviesMenu/moviesList/moviesList';
import { Loader } from '../../components/loader/loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchTrendingFilms().then(data => {
        setFilms(data.results);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <Container>
        <h1>Trending today</h1>
        {films.length > 0 && <MovieList movies={films} />}
        {isLoading && <Loader />}
      </Container>
    </main>
  );
};

export default Home;
