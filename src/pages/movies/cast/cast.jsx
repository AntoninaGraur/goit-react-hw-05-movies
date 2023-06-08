import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastName } from '../moviesDetails.styled';

import { fetchCast } from '../../../apiMovie/ApiMovie';

const Cast = () => {
  const [cast, setCast] = useState({});

  const { id } = useParams();

  useEffect(() => {
    try {
      fetchCast(id).then(data => {
        setCast(data.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (Object.keys(cast).length === 0) {
    return <p>Sorry, no information!</p>;
  }

  return (
    <CastList>
      {cast.map(({ id, profile_path, character, original_name }) => (
        <li key={id}>
          <img
            width="120"
            height="160"
            src={profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : `https://pixabay.com/photos/no-beach-annual-writing-to-write-3761956/`}
            alt={original_name}
          />
          <CastName>
            <h4>{original_name ? original_name : 'No Name'}</h4>
            <h6>
              <b>Character: </b> {character ? character : 'No Character'}
            </h6>
          </CastName>
        </li>
      ))}
    </CastList>
  );
};

export default Cast;
