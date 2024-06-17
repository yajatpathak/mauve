import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import StoreURL from "../entities/StoreURL";

function useStoreURL(gamePk: number | string) {
  const apiClient = new APIClient<StoreURL>(`/games/${gamePk}/stores`);
  return useQuery({
    queryKey: ["stores", gamePk],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}

export default useStoreURL;
