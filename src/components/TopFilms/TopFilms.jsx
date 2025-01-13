import { useEffect, useState } from "react";
import { fetchAllFilms } from "../../api/api";
import { Link, useLocation } from "react-router-dom";

const TopFilms = () => {
  const [topDailyFilms, setTopDailyFilms] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const data = async () => {
      const response = await fetchAllFilms();
      setTopDailyFilms(response.results);
    };
    data();
  }, []);

  return (
    <div>
      <ul>
        {topDailyFilms.map((item) => (
          <li key={item.id}>
            <Link to={`/movie/${item.id}`} state={location}>
              <p>{item.original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFilms;
