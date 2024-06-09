import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data.results);
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
}

export default useGenres;
