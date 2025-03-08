import { useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard";

function Home() {
  const { movieList } = useSelector((state) => state.movies);

  return (
    <>
      <div className="d-flex align-items-center text-center search-card ">
        <div className="col-lg-6 mx-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search Movie"
              disabled
            />
            <span className="input-group-text" id="basic-addon2">
              Search
            </span>
          </div>
        </div>
      </div>

      <div className="row">
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
export default Home;
