import { useEffect, useState } from "react";
import TopFilms from "../../components/TopFilms/TopFilms";
import { fetchAllFilms } from "../../api/api";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const data = async () => {
      const response = await fetchAllFilms();
      setFilms(response.results);
    };
    data();
  }, []);

  return (
    <div>
      <TopFilms films={films} />
    </div>
  );
};

export default HomePage;
