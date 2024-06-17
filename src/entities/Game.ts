import Publisher from "./Publishers";
import Genre from "./Genre";
import Platform from "./Platform";

interface Store {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  esrb_rating: { name: string };
  stores: { id: number; store: Store }[];
}

export default Game;
