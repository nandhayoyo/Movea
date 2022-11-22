import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/keyword?query=${q}api_key=${apiKey}`
  );
  return search.data;
};
