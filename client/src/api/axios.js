import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mini-linkedin-backend-nojm.onrender.com/api", // 👈 backend Render URL
});

export default instance;
