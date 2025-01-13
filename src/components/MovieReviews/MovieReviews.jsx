import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviewsFilm } from "../../api/api";

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
    <div>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
