import React, { useEffect, useState } from "react";
import "./row.css";
import instanceAxiose from "../../../utils/axios";

function Row({ name, fetchUrl, istargeRow }) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    (async () => {
      try {
        //  const req = await instanceAxiose.get();
      } catch (error) {
        console.log("The error is", error);
      }
    })();
  });
  return (
  <>
  </>
  );
}

export default Row;
