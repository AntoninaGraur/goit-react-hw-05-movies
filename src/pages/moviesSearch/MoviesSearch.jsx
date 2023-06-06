import { searchFilms } from 'apiMovie/ApiMovie';
import { useEffect, useState } from 'react'

function MoviesSearch() {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query) return;

        const getSearchFilms = async () => {
            const { data} = await searchFilms();
            setQuery(data);
        }; getSearchFilms();
        console.log(getSearchFilms());
    }, [query]);
    
  return (
      <>
          {/* <h2>Movies</h2>
          {getSearchFilms} */}
      
    </>
  )
}

export default MoviesSearch;
