import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ films }) => {
  const location = useLocation();

  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className={css.wrappFilms}>
      <ul className={css.movieList}>
        {films.map((item) => (
          <li key={item.id} className={css.movieItem}>
            <Link
              to={`/movies/${item.id}`}
              state={location}
              className={css.imgBot}
            >
              <p className={css.movieTitle}>{item.original_title}</p>

              <img
                src={
                  item.poster_path
                    ? BASE_IMG_URL + item.poster_path
                    : "https://tse4.mm.bing.net/th?id=OIP.a81TCkpymULaVO1HMGwqEAHaIO&pid=Api"
                }
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
