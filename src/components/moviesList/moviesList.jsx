import { Link } from 'react-router-dom';
import {MoviesStyledList, MoviesStyledListText} from './moviesList.styled'

function MoviesList({ moviesListArr }) {
  return (
    <MoviesStyledList>
      {moviesListArr.map(({ id, original_title, poster_path}) => {
        return (
          <MoviesStyledListText key={id}>
            <li>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title} /></li>
            <Link to={`movies/${id}`}>{original_title}</Link>
           
          </MoviesStyledListText>
        );
      })}
    </MoviesStyledList>
  );
}

export default MoviesList;





