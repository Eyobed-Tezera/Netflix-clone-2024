
import Row from "../Row/Row";
import requests from "../../../utils/requests";
import React, { useState } from "react";
function RowList() {
const [logicalTrailer, setLogicalTrailer] = useState(null); 
  return (
    <div>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        LargeRow={true}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="TV Shows"
        fetchUrl={requests.fetchTvShow}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="SicenceFiction"
        fetchUrl={requests.fetchSicenceFiction}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="WarMovies"
        fetchUrl={requests.fetchWarMovies}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="History"
        fetchUrl={requests.fetchHistory}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Fantasy"
        fetchUrl={requests.fetchFantasy}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Adventure"
        fetchUrl={requests.fetchAdventureMovies}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Drama"
        fetchUrl={requests.fetchDrama}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Crime"
        fetchUrl={requests.fetchCrime}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Thriller"
        fetchUrl={requests.fetchThriller}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
      <Row
        title="Animation"
        fetchUrl={requests.fetchAnimation}
        logicalTrailer={logicalTrailer}
        setLogicalTrailer={setLogicalTrailer}
      />
    </div>
  );
}

export default RowList;
