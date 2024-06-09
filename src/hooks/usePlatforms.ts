import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms() {
  const apiClient = new APIClient<Platform>("/platforms/lists/parents");

  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
}

export default usePlatforms;
