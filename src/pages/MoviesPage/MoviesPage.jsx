import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { searchFilm } from "../../api/api";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const movie = searchParams.get("movie") ?? "";
  const [query, setQuery] = useState(movie);
  const [maxPage, setMaxPage] = useState(1);

  const page = Number(searchParams.get("page")) || 1;

  const initialValues = {
    queryFilm: "",
  };
  const [dataFilm, setDataFilm] = useState([]);

  useEffect(() => {
    const searchMovie = async (query, page) => {
      const { data } = await searchFilm(query, page);
      setMaxPage(data.total_pages);

      setDataFilm(data.results);
    };
    searchMovie(query, page);
  }, [query, page]);

  const changePage = (newPage) => {
    setSearchParams({ movie: query, page: newPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function handleSubmit(value) {
    if (!value.queryFilm) {
      return;
    }
    setQuery(value.queryFilm);
    setSearchParams({ movie: value.queryFilm, page: 1 });
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field type="text" name="queryFilm" className={css.searchFilm} />
          <button type="submit">Enter</button>
        </Form>
      </Formik>
      <MovieList films={dataFilm} />
      <div className={css.wrappBtnPage}>
        {page === 1 ? null : (
          <button onClick={() => changePage(page - 1)} className={css.btnPage}>
            Previous
          </button>
        )}
        {page === maxPage ? null : (
          <button onClick={() => changePage(page + 1)} className={css.btnPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
