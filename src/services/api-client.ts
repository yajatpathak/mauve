import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInsanace = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
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
