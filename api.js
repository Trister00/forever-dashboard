import axios from "axios";

let api = axios.create({
  baseURL: "https://forever-express-mysql.herokuapp.com/"
  //baseURL: "http://localhost:8000/"
});

export default api;
