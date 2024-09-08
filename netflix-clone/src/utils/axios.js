import axios from "axios";
const instance = axios.create({
  baseURL: "https://developer.themoviedb.org/3",
});
export default instance;
