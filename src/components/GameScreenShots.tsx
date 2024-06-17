import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";
import useGameStore from "../gameStore";

function GameScreenShots() {
  const gameId = useGameStore((s) => s.game.id);
  const { data, isLoading, error } = useGameScreenshots(gameId);

  if (error) return <Text>Could not load ScreenShots: {error.message}</Text>;
  if (isLoading || !data || !data[0]) return;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data.map((img) => (
        <Image key={img.id} src={img.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShots;
