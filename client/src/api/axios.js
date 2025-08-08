
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"https://mini-linkedin-backend-ddst.onrender.com/api", // 👈 backend Render URL
});

export default axiosInstance;