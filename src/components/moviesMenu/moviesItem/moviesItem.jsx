import React from 'react';
// import PropTypes from 'prop-types';

import { FilmTitle } from 'pages/home/home.styled';
import { useLocation, Link} from 'react-router-dom';

function MovieItem({ id, title, poster_path }) {
  const location = useLocation();

  return (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }} >
        <img
          src={
            `https://image.tmdb.org/t/p/w400${poster_path}`}
          alt={title}
          width="250"
          height="350"
        />
        <FilmTitle>{title}</FilmTitle>
      </Link>
    </li>
  );
}

// MovieItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   poster_path: PropTypes.string,
//   title: PropTypes.string.isRequired,
// };

export default MovieItem;