import { lazy, Suspense } from "react";
import { LineWave } from "react-loader-spinner";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import Navigation from "./components/Navigation/Navigation";

const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <LineWave
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="line-wave-loading"
              wrapperStyle={{}}
              wrapperClass=""
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            />
          </div>
        }
      >
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
