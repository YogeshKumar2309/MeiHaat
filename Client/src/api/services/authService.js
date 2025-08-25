import axios from "../config/axios"; // axios instance with baseURL & interceptors

export const loginApi = async (email, password, role) => {
  const response = await axios.post('/auth/login', {email, password});
  return response.data; // {user, token}
};

export const singupApi = async (email, password, role) => {
  const response = await axios.post('/auth/signup', {email, password, role});
  return response.data; 
};