import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";
import useGameStore from "../gameStore";

function GameScreenShots() {
  const gameId = useGameStore((s) => s.game.id);
  const { data, isLoading, error } = useGameScreenshots(gameId);

  if (error) return <Text>Could not load ScreenShots: {error.message}</Text>;
  if (isLoading || !data || !data[0]) return;

  return (
    <>
      <Heading marginTop={5} fontSize="lg" color="grey">
        Screenshots
      </Heading>
      <Box boxShadow="dark-lg" padding="5px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {data.map((img) => (
            <Image key={img.id} src={img.image} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default GameScreenShots;
