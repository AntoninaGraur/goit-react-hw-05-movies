import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useParams, NavLink } from 'react-router-dom';
import Container from '../../components/container/container';
import { useState } from 'react';
import { fetchFilmsById } from '../../apiMovie/ApiMovie';
// import { Icon } from './movies.styled';
import { DetailsDiv,TextContainer, AddIndorm,GoBckkBtn} from './moviesDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  const location = useLocation();
  const backLocation = location.state?.from ?? '/';

  // console.log(location);
  // console.log(backLocation);

  useEffect(() => {
    try {
      fetchFilmsById(id).then(data => {
        setMovie(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <main>
      <Container>
        <NavLink to={backLocation}>
         <GoBckkBtn type='button'>Go Back</GoBckkBtn>
        </NavLink>
        <DetailsDiv>
          <img
            width="300"
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
          <TextContainer>
            <h2>{title ? title : 'No Information'}</h2>
            <p>
              <span>User Score: </span>
              {vote_average ? Math.round(vote_average * 10) : 0}%
            </p>
            <p>
              <span>Overview: </span>
              {overview ? overview : 'No Information'}
            </p>
            <p>
              <span>Genres: </span>
              {genres && genres.length > 0
                ? genres.map(value => value.name).join(', ')
                : 'No information'}
            </p>
          </TextContainer>
        </DetailsDiv>
        <AddIndorm>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast" state={{ from: backLocation }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={{ from: backLocation }}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </AddIndorm>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;
