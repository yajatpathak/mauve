import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useGameQuery from "../stores/gameQueryStore";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

function useGames() {
  const gameQuery = useGameQuery((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) => {
      return apiClient.getAllInfinite({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          publishers: gameQuery.publisherId,
          page: pageParam,
          exclude_additions: true,
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
  });
}

export default useGames;
