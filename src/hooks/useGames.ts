import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

function useGames(gameQuery: GameQuery) {
  const apiClient = new APIClient<Game>("/games");

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) => {
      return apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}

export default useGames;
