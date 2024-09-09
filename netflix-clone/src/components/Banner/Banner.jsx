import React, { useEffect, useState } from "react";
import "./banner.css";
import instanceAxiose from "../../utils/axios";
import requests from "../../utils/requests";
import { StyledBanner } from "../../utils/banner.style";
import { truncate } from "../../utils/truncate";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { image } from "../../utils/image";
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
          <button className="banner_button playColor">
            <PlayArrowIcon
              style={{
                color: "black",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />
            Play
          </button>
          <button className="banner_button ">
            <img
              src={image}
              alt=""
              style={{  height: "20px", marginRight: "8px" }}
            />
            <p>More Info</p>
          </button>
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </StyledBanner>
  );
}

export default Banner;
