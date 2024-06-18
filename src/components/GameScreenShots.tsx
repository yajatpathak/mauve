import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import useGameStore from "../gameStore";
import useGameScreenshots from "../hooks/useGameScreenshots";
import getCroppedImageUrl from "../services/image-url";

function GameScreenShots() {
  const gameId = useGameStore((s) => s.game.id);
  const { data, isLoading, error } = useGameScreenshots(gameId);

  if (error) {
    console.log("GameScreenShots: " + error.message);
    return;
  }
  if (isLoading || !data || !data[0]) return;

  return (
    <>
      <Heading marginTop={5} fontSize="lg" color="grey">
        Screenshots
      </Heading>
      <Box boxShadow="dark-lg" padding="5px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {data.map((img) => (
            <Image key={img.id} src={getCroppedImageUrl(img.image)} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default GameScreenShots;
