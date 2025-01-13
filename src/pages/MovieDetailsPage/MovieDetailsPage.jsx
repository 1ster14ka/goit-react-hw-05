import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { infoFilm } from "../../api/api";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [infoMovie, setInfoMovie] = useState([]);
  const location = useLocation();
  const backBtn = useRef(location.state ?? "/movies");

  useEffect(() => {
    const infFilm = async () => {
      try {
        const { data } = await infoFilm(moviesId);
        setInfoMovie([data]);
      } catch (error) {
        console.log(error);
      }
    };
    infFilm();
  }, [moviesId]);

  return (
    <div>
      <NavLink to={backBtn.current} className={css.backBtn}>
        {" "}
        Go Back
      </NavLink>
      {infoMovie ? (
        <div className={css.detailsFilm}>
          <ul>
            {infoMovie.map((item) => (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={`${item.title}`}
                  className={css.image}
                />
                <h2>{item.title}</h2>
                <p>Rating: {item.vote_average}</p>
                <p>
                  Duration: {Math.floor(item.runtime / 60)}h.{" "}
                  {item.runtime % 60}
                  m.
                </p>
                <h3>Overview</h3>
                <p>{item.overview}</p>
                <h3>Genres</h3>
                <div>
                  {item.genres.map((item) => (
                    <p key={item.id}>{item.name}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div>
            <NavLink to="cast" className={css.cast}>
              Cast
            </NavLink>
            <NavLink to="reviews" className={css.reviews}>
              Reviews
            </NavLink>
            <Outlet />
          </div>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
