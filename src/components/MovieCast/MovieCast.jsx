import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { infoCast } from "../../api/api";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const actors = async () => {
      try {
        const {
          data: { cast },
        } = await infoCast(moviesId);
        setActors(cast);
      } catch (error) {
        console.log(error);
      }
    };
    actors();
  }, [moviesId]);

  return (
    <div>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <h3>Actor: {actor.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
