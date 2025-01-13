import { useEffect, useState } from "react";
import TopFilms from "../../components/TopFilms/TopFilms";
import { fetchAllFilms } from "../../api/api";
import css from "./HomePage.module.css";

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

      <TopFilms films={films} />
    </>
  );
};

export default HomePage;
