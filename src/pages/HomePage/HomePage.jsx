import { useEffect, useState } from "react";
import { fetchAllFilms } from "../../api/api";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const data = async () => {
      const response = await fetchAllFilms();
      setFilms(response.results);
    };
    data();
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending today</h2>

      <MovieList films={films} />
    </>
  );
};

export default HomePage;
