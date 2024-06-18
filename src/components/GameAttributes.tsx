import { SimpleGrid, Text } from "@chakra-ui/react";
import GameDefinition from "./GameDifinition";
import useGameStore from "../gameStore";
import useStoreURL from "../hooks/useStoreURL";
import StoreLink from "./StoreLink";

function GameAttributes() {
  const game = useGameStore((s) => s.game);
  const { data: storeUrl, error } = useStoreURL(game.id);

  if (error) {
    console.log("GameAttributes(StoreUrl): " + error.message);
  }

  return (
    <SimpleGrid columns={2} as="dl" spacing={5}>
      <GameDefinition term="Platforms">
        {game.parent_platforms.map(({ platform }, index) => (
          <Text display="inline" key={platform.id}>
            {platform.name}
            {index !== game.parent_platforms.length - 1 ? " | " : ""}
          </Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Genres">
        {game.genres.map((genre, index) => (
          <Text display="inline" key={genre.id}>
            {genre.name}
            {index !== game.genres.length - 1 ? " | " : ""}
          </Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Publishers">
        {game.publishers?.map((dev, index) => (
          <Text display="inline" key={dev.id}>
            {dev.name}
            {index !== game.publishers.length - 1 ? " | " : ""}
          </Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Stores">
        {storeUrl?.map((store) => (
          <StoreLink key={store.id} storeURL={store} />
        ))}
      </GameDefinition>
    </SimpleGrid>
  );
}

export default GameAttributes;
