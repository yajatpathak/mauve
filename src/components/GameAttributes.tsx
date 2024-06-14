import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import GameDefinition from "./GameDifinition";

interface GameAttributesProp {
  game: Game;
}

function GameAttributes({ game }: GameAttributesProp) {
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
          <Text>{dev.name}</Text>
        ))}
      </GameDefinition>
    </SimpleGrid>
  );
}

export default GameAttributes;
