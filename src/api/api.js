import axios from "axios";

const url = "https://api.themoviedb.org/3";
const topFilms = "/trending/movie/week?language=en-US";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTcyMzdiYThlYzk3Y2I5YmY4YWMxNjdlM2VmNDJkMyIsIm5iZiI6MTczNjY4NDI1OS4xNDcsInN1YiI6IjY3ODNiMmUzZWU4NGZhNGRlZjdiNjQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2ceczyLEL1cRSn6X9Gof8gzV6HUEhRyOU2yawQM6oU",
  },
};

export const fetchAllFilms = async () => {
  const { data } = await axios.get(url + topFilms, options);
  return data;
};

export const searchFilm = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response;
};

export const infoFilm = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return response;
};

export const infoCast = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return response;
};

export const reviewsFilm = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return response;
};
