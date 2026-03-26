import axios from "axios";

const API = axios.create({
  baseURL: "https://eduplan-backend-eq4d.onrender.com"
});

export default API;
