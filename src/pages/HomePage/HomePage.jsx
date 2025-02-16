import { useEffect, useState } from "react";
import { fetchAllFilms } from "../../api/api";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import c from "../MoviesPage/MoviesPage.module.css";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const data = async () => {
      const response = await fetchAllFilms(page);
      setMaxPage(response.total_pages);

      setFilms(response.results);
    };
    data();
  }, [page]);

  const changePage = (newPage) => {
    setSearchParams({ page: newPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <h2 className={css.title}>Trending today</h2>

      <MovieList films={films} />

      <div className={c.wrappBtnPage}>
        {page === 1 ? null : (
          <button onClick={() => changePage(page - 1)} className={c.btnPage}>
            Previous
          </button>
        )}
        {page === maxPage ? null : (
          <button onClick={() => changePage(page + 1)} className={c.btnPage}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default HomePage;
