import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInsanace = axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_REACT_APP_PORT || 8000}`,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInsanace
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data.results);
  };

  getAllInfinite = (config: AxiosRequestConfig) => {
    return axiosInsanace
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInsanace
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
