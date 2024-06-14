import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface GameScreenShotsProps {
  gamePk: number | string;
}

function GameScreenShots({ gamePk }: GameScreenShotsProps) {
  const { data, isLoading, error } = useGameScreenshots(gamePk);

  if (error) return <Text>Could not load ScreenShots: {error.message}</Text>;
  if (isLoading || !data || !data.results[0]) return;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
      {data.results.map((img) => (
        <Image key={img.id} src={img.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShots;