import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}
