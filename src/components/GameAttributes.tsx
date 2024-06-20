import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameDefinition from "./GameDifinition";
import useGameStore from "../stores/gameStore";
import useStoreURL from "../hooks/useStoreURL";
import StoreLink from "./StoreLink";
import { Link } from "react-router-dom";

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
        {game.publishers?.map((dev) => (
          <Link to={"/publishers/" + dev.slug} key={dev.id}>
            <Button
              marginBottom={3}
              marginRight={2}
              size="xs"
              fontWeight="bold"
              colorScheme="brand"
            >
              {dev.name}
            </Button>
          </Link>
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
