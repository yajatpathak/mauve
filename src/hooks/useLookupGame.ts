import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

function useLookupGame(slug: string) {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
}

export default useLookupGame;
