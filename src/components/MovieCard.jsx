import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";

export function MovieCard({ movie }) {
  return (
    <div className="col-sm-3 mb-4 " key={movie?.title}>
      <div className="card movie-card">
        <img src={movie?.img} className="card-img-top" alt="..." />
        <div className="card-body d-flex justify-content-between align-content-center">
          <h5 className="card-text">
            <Link to={`/movie/${movie?.id}`}>{movie?.title}</Link>
          </h5>
          <span>
            <FaHeart color="red" />
          </span>
        </div>
      </div>
    </div>
  );
}
