import { create } from "zustand";
import Publisher from "../entities/Publishers";

interface PublisherStore {
  publisher: Publisher;
  setPublisher: (publisher: Publisher) => void;
  clearPublisher: () => void;
}

const usePublisherStore = create<PublisherStore>((set) => ({
  publisher: {} as Publisher,
  setPublisher: (publisher) => set({ publisher: publisher }),
  clearPublisher: () => set({ publisher: {} as Publisher }),
}));

export default usePublisherStore;
