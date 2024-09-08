import React, { useEffect, useState } from "react";
import "./banner.css";
import instanceAxiose from "../../utils/axios";
import requests from "../../utils/requests";
import { StyledBanner } from "../../utils/banner.style";
import { truncate } from "../../utils/truncate";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      try {
        const req = await instanceAxiose.get(requests.fetchActionMovies);
        // console.log(req);
        const results = req.data.results;
        console.log(results);
        const randomIndex = Math.floor(Math.random() * results.length); //index
        const randomMovie = results[randomIndex]; //This is the moviee result[0,2212]
        setMovie((movie) => randomMovie);
        // console.log(randomMovie);
      } catch (error) {
        console.log("The error is", error);
      }
    })();
  }, []);

  return (
    <StyledBanner $backdropPath={movie?.backdrop_path}>
      <div className="banner_contents">
        <h1 className="banner_name">{movie?.name || movie?.original_name}</h1>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
        <div className="banner_buttons">
          <button className="banner_button playColor">Play</button>
          <button className="banner_button">More Info</button>
        </div>

      </div>
      <div className="banner_fadeBottom" />
    </StyledBanner>
  );
}

export default Banner;
