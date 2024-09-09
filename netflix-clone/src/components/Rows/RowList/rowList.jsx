import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
function RowList() {
  return (
    <div>
      <Row
        title="NetflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
        LargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="SicenceFiction" fetchUrl={requests.fetchSicenceFiction} />
      <Row title="WarMovies" fetchUrl={requests.fetchWarMovies} />
      <Row title="History" fetchUrl={requests.fetchHistory} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Thriller" fetchUrl={requests.fetchThriller} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
    </div>
  );
}
export default RowList;
