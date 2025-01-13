import { Field, Formik } from "formik";
import { useState } from "react";
import { Form } from "react-router-dom";
// import toast from "toast";

const MoviesPage = () => {
  const initialValues = {
    queryFilm: "",
  };
  const [query, setQuery] = useState("");
  const [dataFilm, setDataFilm] = useState([]);

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
        <Form>
          <Field type="text" name="queryFilm" />
          <button type="submit">Enter</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MoviesPage;
