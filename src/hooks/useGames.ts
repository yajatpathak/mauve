import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";
import useGameQuery from "../gameQueryStore";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

function useGames() {
  const apiClient = new APIClient<Game>("/games");
  const gameQuery = useGameQuery((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) => {
      return apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          exclude_additions: true,
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 10 * 60 * 1000, // 10 min
  });
}

export default useGames;
