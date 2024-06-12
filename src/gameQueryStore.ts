import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
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
}));

export default useGameQuery;