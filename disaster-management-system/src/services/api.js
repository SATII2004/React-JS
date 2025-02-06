import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const loginUser = async (email, password) => {
  return axios.post(`${API_BASE_URL}/auth/login`, { email, password });
};

export const reportDisaster = async (location, description) => {
  return axios.post(`${API_BASE_URL}/disasters`, { location, description });
};
