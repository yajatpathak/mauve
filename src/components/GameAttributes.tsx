import { SimpleGrid, Text } from "@chakra-ui/react";
import GameDefinition from "./GameDifinition";
import useGameStore from "../gameStore";

function GameAttributes() {
  const game = useGameStore((s) => s.game);
  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} as="dl">
      <GameDefinition term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Publishers">
        {game.publishers?.map((dev) => (
          <Text key={dev.id}>{dev.name}</Text>
        ))}
      </GameDefinition>
    </SimpleGrid>
  );
}

export default GameAttributes;
