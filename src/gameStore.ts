import { create } from "zustand";
import Game from "./entities/Game";

interface GameStore {
  game: Game;
  setGame: (game: Game) => void;
  clearGame: () => void;
}

const useGameStore = create<GameStore>((set) => ({
  game: {} as Game,
  setGame: (game) => set({ game: game }),
  clearGame: () => set({ game: {} as Game }),
}));

export default useGameStore;
