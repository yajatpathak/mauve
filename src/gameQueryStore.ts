import { create } from "zustand";
import GameQuery from "./entities/GameQuery";

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  clearGameQuery: () => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: { sortOrder: "", searchText: "" },
  setSearchText: (searchText) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, searchText } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  clearGameQuery: () => set({ gameQuery: { sortOrder: "", searchText: "" } }),
}));

export default useGameQuery;
