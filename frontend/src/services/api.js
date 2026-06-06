import axios from "axios";

const API = axios.create({
  baseURL: "https://route-cost-calcula.onrender.com/api/trips",
});

export default API;