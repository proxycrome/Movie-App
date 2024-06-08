import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const { data } = props;

  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="card-item flex-col">
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
            </div>
          </div>
        </div>

        <div className="text-col">
          <p>{data.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
