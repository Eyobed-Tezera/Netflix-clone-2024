import React, { useEffect, useState } from "react";
import "./row.css";
import instanceAxiose from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, LargeRow, customClass }) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const req = await instanceAxiose.get(fetchUrl);
        setMovie(req.data.results);
      } catch (error) {
        console.log("The error is", error);
      }
    })();
  }, [fetchUrl]);

  const handelClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };
  const options = {
    hight: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className={`row ${customClass}`}>
        <h3 className="Thetitle">{title}</h3>
        <div className="row_posters">
          {movies?.map((movie, i) => (
            <img
              onClick={() => handelClick(movie)}
              key={i}
              src={`${baseUrl}${
                LargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${LargeRow && "row_posterLarge"}`}
            />
          ))}
        </div>
        <div style={{ padding: 40 }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
        </div>
      </div>
    </>
  );
}

export default Row;
