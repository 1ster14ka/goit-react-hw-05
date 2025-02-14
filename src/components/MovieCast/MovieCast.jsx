import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { infoCast } from "../../api/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const actors = async () => {
      try {
        const {
          data: { cast },
        } = await infoCast(moviesId);
        console.log(cast);

        setActors(cast);
      } catch (error) {
        console.log(error);
      }
    };
    actors();
  }, [moviesId]);

  return (
    <div>
      <ul className={css.movieCastList}>
        {actors.map((actor) => (
          <li key={actor.id} className={css.movieCastItem}>
            <h3>Actor: {actor.name}</h3>
            <div className={css.actorImgContainer}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : `../../../public/actor.jpg`
                }
                alt=""
                className={css.actorImg}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
