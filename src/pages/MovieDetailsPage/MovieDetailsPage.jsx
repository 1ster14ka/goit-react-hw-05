import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { infoFilm } from "../../api/api";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  console.log(moviesId);
  useEffect(() => {
    const infFilm = async () => {
      try {
        const data = await infoFilm(moviesId);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    infFilm();
  }, [moviesId]);

  return (
    <div>
      <h2>Details</h2>
    </div>
  );
};

export default MovieDetailsPage;
