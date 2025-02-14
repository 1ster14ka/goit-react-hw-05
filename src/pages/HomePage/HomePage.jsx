import { useEffect, useState } from "react";
import { fetchAllFilms } from "../../api/api";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    const data = async () => {
      const response = await fetchAllFilms(page);
      console.log(response);
      // const maxPages = response.total_pages;
      setMaxPage(response.total_pages);
      console.log(maxPage);

      setFilms(response.results);
    };
    data();
  }, [page]);

  function nextPage() {
    setPage((prev) => (prev += 1));
  }

  function prevPage() {
    setPage((prev) => (prev -= 1));
  }

  return (
    <>
      <h2 className={css.title}>Trending today</h2>

      <MovieList films={films} />

      {page === 1 ? null : <button onClick={prevPage}>Previous</button>}
      {page === maxPage ? null : <button onClick={nextPage}>Next</button>}
    </>
  );
};

export default HomePage;
