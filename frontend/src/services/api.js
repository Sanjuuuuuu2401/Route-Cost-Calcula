import axios from "axios";

const baseURL = import.meta.env.DEV
  ? "http://localhost:5000/api/trips"
  : "https://route-cost-calcula.onrender.com/api/trips";

const API = axios.create({ baseURL });

export default API;