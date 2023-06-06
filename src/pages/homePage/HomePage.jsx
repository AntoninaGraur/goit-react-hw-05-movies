import MoviesList from '../../components/moviesList/moviesList';
import { useEffect, useState } from 'react';
import { getMostTrendingFilms } from '../../apiMovie/ApiMovie';

function HomePage() {
  const [popularFilms, setpopularFilms] = useState(null);

  useEffect(() => {
    if (popularFilms) return;

    const getTrendingFilms = async () => {
      const { results } = await getMostTrendingFilms();
      setpopularFilms(results);
    };

    getTrendingFilms();
  }, [popularFilms]);

  return (
    <>
      <h2>Trending today</h2>
      {popularFilms && <MoviesList moviesListArr={popularFilms} />}
    </>
  );
}

export default HomePage;

