import { SimpleGrid, Text } from "@chakra-ui/react";
import GameDefinition from "./GameDifinition";
import useGameStore from "../gameStore";
import useStoreURL from "../hooks/useStoreURL";
import StoreLink from "./StoreLink";

function GameAttributes() {
  const game = useGameStore((s) => s.game);
  const { data: storeUrl } = useStoreURL(game.id);

  return (
    <SimpleGrid columns={2} as="dl" spacing={5}>
      <GameDefinition term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text display="inline" key={platform.id}>
            {platform.name + " | "}
          </Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Genres">
        {game.genres.map((genre) => (
          <Text display="inline" key={genre.id}>
            {genre.name + " | "}
          </Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Publishers">
        {game.publishers?.map((dev) => (
          <Text display="inline" key={dev.id}>
            {dev.name + " | "}
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
