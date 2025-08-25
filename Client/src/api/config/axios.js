import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api" ;

//Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

//Request interceptor
axiosInstance.interceptors.request.use((config) => {
  //if token availble then add header
  const token = localStorage.getItem("authToken");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
},
  (error) => Promise.reject(error)
);


//Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    //401 Unauthorized 
    if (error.response?.status === 401) {
      console.warn("Unauthorized, please login again.");
      //window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;
