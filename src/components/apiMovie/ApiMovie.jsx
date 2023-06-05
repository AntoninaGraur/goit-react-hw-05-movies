import axios from "axios";

const fetchMovies = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=c6d20ac7fe7f3a55ab35208eb3f1e312`);

    return response.data;
};
export default fetchMovies;