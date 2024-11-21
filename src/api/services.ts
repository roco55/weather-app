import axios, { AxiosInstance } from "axios";

export const APIKey = "6570dcfaef8a75d383a1515de2b6beff";
export const BASE_URL = "https://api.openweathermap.org/data/2.5";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error");
    return Promise.reject(error);
  },
);

export default apiClient;
