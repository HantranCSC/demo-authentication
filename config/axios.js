import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://productbot.pambu.org/api/v1",
});
export default axiosInstance;
