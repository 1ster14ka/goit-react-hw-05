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

  const initialValues = {
    queryFilm: "",
  };
  const [dataFilm, setDataFilm] = useState([]);

  useEffect(() => {
    const searchMovie = async (query) => {
      const { data } = await searchFilm(query);
      //   console.log(data.results);
      setDataFilm(data.results);
    };
    searchMovie(query);
  }, [query]);

  function handleSubmit(value) {
    if (!value.queryFilm) {
      return;
    }
    setQuery(value.queryFilm);
    setSearchParams({ movie: value.queryFilm });
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
    </div>
  );
};

export default MoviesPage;
