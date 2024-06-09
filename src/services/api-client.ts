import axios, { AxiosRequestConfig } from "axios";
import apiKey from "./api-key";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInsanace = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInsanace
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
