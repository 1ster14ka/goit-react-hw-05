import { Link, useLocation } from "react-router-dom";
import css from "./TopFilms.module.css";

const TopFilms = ({ films }) => {
  const location = useLocation();

  return (
    <div className={css.wrappFilms}>
      <ul>
        {films.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={location}>
              <p>{item.original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFilms;
