import React, { useEffect, useState } from "react";
import "./row.css";
import instanceAxiose from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, LargeRow, logicalTrailer, setLogicalTrailer }) {
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
  console.log(trailerUrl);
  console.log(logicalTrailer);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setLogicalTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setLogicalTrailer(title);
        }
      );
    }
  };

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={`row`}>
      <h3 className="Thetitle">{title}</h3>
      <div className="row_posters">
        {movies?.map((movie, i) => {
          const imagePath = LargeRow ? movie.poster_path : movie.backdrop_path;
          return imagePath ? (
            <img
              onClick={() => handleClick(movie)}
              key={i}
              src={`${baseUrl}${imagePath}`}
              alt={movie.name || "Movie image"}
              className={`row_poster ${LargeRow && "row_posterLarge"}`}
            />
          ) : null;
        })}
      </div>
      <div style={{ padding: 40 }}>
        {trailerUrl && logicalTrailer === title && (  <YouTube videoId={trailerUrl} opts={options} />)}
      </div>
    </div>
  );
}

export default Row;
