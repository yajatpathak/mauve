import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

function useGameAdditions(
  gamePk: number | string,
  type: "additions" | "parent-games" | "game-series"
) {
  const apiClient = new APIClient<Game>(`/games/${gamePk}/${type}`);
  return useQuery({
    queryKey: ["additions", gamePk, type],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}

export default useGameAdditions;
