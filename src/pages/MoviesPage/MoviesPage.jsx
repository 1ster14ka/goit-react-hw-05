import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { searchFilm } from "../../api/api";
import TopFilms from "../../components/TopFilms/TopFilms";
import css from "./MoviesPage.module.css";

// import toast from "toast";

const MoviesPage = () => {
  const initialValues = {
    queryFilm: "",
  };
  const [query, setQuery] = useState("");
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
      //   toast.error("Field is empty, please enter your query...");
      return;
    }
    setQuery(value.queryFilm);
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field type="text" name="queryFilm" />
          <button type="submit">Enter</button>
        </Form>
      </Formik>
      <TopFilms films={dataFilm} />
    </div>
  );
};

export default MoviesPage;
