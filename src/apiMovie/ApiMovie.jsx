import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY = 'c6d20ac7fe7f3a55ab35208eb3f1e312'

export async function getMostTrendingFilms() {
    const { data } = await axios('/trending/movie/day', {
      params: {
              api_key: KEY,
              language: 'en-US',
            }
        
  });
    return data;
    
};

export async function getFilmDetailsById(movieId) {
    const { data } = await axios(`/movie/${movieId}`, {
        params: {
              api_key: KEY,
              language: 'en-US',
            }
  });
console.log(getFilmDetailsById(movieId));
  return data;
};

export async function searchFilms() {
  const { data } = await axios('/search/movie', {
    params: {
      api_key: KEY,
      language: 'en-US',
      query: '',
      page: 1,
      include_adult: false,
    },
  });
    console.log(searchFilms)
    return data;
    
};