import React from 'react';

// import PropTypes from 'prop-types';
import MovieItem from '../moviesItem/moviesItem';
import { HomeList } from 'pages/home/home.styled';

const MovieList = ({ movies }) => {
  return (
    <HomeList>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} poster_path={poster_path} />
      ))}
    </HomeList>
  );
};

export default MovieList;

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       poster_path: PropTypes.string,
//     })
//   ).isRequired,
// };