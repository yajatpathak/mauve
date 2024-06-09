import axios from "axios";
import apiKey from "./api-key";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});
