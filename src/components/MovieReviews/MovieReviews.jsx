import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviewsFilm } from "../../api/api";
import css from "../../pages/MovieDetailsPage/MovieDetailsPage.module.css";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviews = async () => {
      try {
        const {
          data: { results },
        } = await reviewsFilm(moviesId);

        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    reviews();
  }, [moviesId]);
  return (
    <div className={css.wrappCast}>
      <ul>
        {reviews.length === 0 ? (
          <p>Empty</p>
        ) : (
          reviews.map((item) => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
