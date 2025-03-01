export function MovieCard({ movie }) {
  return (
    <div className="col-sm-3 mb-4 " key={movie?.title}>
      <div className="card movie-card" aria-hidden="true">
        <img src={movie?.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-text">{movie?.title}</h5>
        </div>
      </div>
    </div>
  );
}
