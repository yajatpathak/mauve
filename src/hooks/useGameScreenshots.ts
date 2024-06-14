import { useQuery } from "@tanstack/react-query";
import ScreenShot from "../entities/ScreenShot";
import APIClient from "../services/api-client";

function useGameScreenshots(gamePk: number | string) {
  const apiClient = new APIClient<ScreenShot>(`/games/${gamePk}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gamePk],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
}

export default useGameScreenshots;
