const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const requests = {
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchSicenceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchUpcoming: `movie/upcoming?api_key=${API_KEY}language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}language=en-US`,
  fetchTranding: `/trending/all/day?api_key=${API_KEY}language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};
