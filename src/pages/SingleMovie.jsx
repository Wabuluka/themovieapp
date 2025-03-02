import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router";
import { movies } from "../assets/movies";
import { FaHeart } from "react-icons/fa";
export function SingleMovie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async (myId) => {
    console.log(myId);
    const result = await movies.filter((m) => m.id == myId)[0];
    setMovie(result);
    console.log(result);
  };
  useEffect(() => {
    getMovie(id);
  }, []);
  return (
    <div className="d-flex py-5">
      <div className="row">
        <div className="col-lg-5 single-movie">
          <img
            src={movie?.img}
            alt=""
            className="rounded"
            width="100%"
            height={"100%"}
          />
        </div>
        <div className="col-lg-7  ">
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <h3 className="h1">{movie?.title}</h3>
                <span>Horror</span>
              </div>

              <p className="lead">{movie?.desc}</p>
            </div>
            <div className="col-lg-12 d-flex gap-2 ">
              <button type="button" className="btn btn-info">
                Buy - $40
              </button>
              <button type="button" className="btn btn-info">
                Add to Watchlist
              </button>

              <button type="button" className="btn btn-info">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
