import axios from "axios";
const baseURL = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BACKEND_API_PRODUCTION : process.env.NEXT_PUBLIC_BACKEND_API_DEV
const axiosInstance = axios.create({
  baseURL,
});
export default axiosInstance;
