import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.notFoundTitle}>404</h1>
      <p className={css.notFoundText}>
        {` Oops! It looks like you've lost your way in the world of cinema. This
        page doesn't exist.`}
      </p>
      <Link to="/" className={css.notFoundButton}>
        Return to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
