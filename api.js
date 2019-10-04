import axios from "axios";

let api = axios.create({
  baseURL: "https://forever-express-mysql.herokuapp.com/"
});

export default api;
