import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import useGameStore from "../stores/gameStore";

function GameTrailer() {
  const gameId = useGameStore((s) => s.game.id);
  const { data, error, isLoading } = useGameTrailers(gameId);
  const [currIndex, setCurrIndex] = useState(0);

  if (error) {
    console.log("GameTrailer: " + error.message);
    return;
  }
  if (isLoading || !data || !data[0]) return;

  const max = data.length - 1;
  const currTrailer = data[currIndex];

  return (
    <Box boxShadow="dark-lg" padding="5px">
      <HStack>
        <IconButton
          colorScheme="brand"
          aria-label="Previous Trailer"
          isRound={true}
          variant="outline"
          isDisabled={currIndex === 0}
          onClick={() => setCurrIndex(currIndex - 1)}
          icon={<GrPrevious />}
        />
        <video
          width="100%"
          src={currTrailer.data[480]}
          poster={currTrailer.preview}
          controls
        />
        <IconButton
          colorScheme="brand"
          aria-label="Next Trailer"
          isRound={true}
          variant="outline"
          isDisabled={currIndex === max}
          onClick={() => setCurrIndex(currIndex + 1)}
          icon={<GrNext />}
        />
      </HStack>
      <Text marginTop={3} align="center">
        {currTrailer.name}({currIndex + 1}/{max + 1})
      </Text>
    </Box>
  );
}
export default GameTrailer;
