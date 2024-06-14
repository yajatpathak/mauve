import { HStack, IconButton, Text } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface GameTrailerProp {
  gameId: number;
}

function GameTrailer({ gameId }: GameTrailerProp) {
  const { data, error, isLoading } = useGameTrailers(gameId);
  const [currIndex, setCurrIndex] = useState(0);

  if (error) return <Text>Could not load trailer: {error.message}</Text>;
  if (isLoading || !data || !data.results[0]) return;

  const max = data.results.length - 1;
  const currTrailer = data.results[currIndex];

  return (
    <>
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
          height="480"
          width="640"
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
      <Text marginY={3}>{currTrailer.name}</Text>
    </>
  );
}
export default GameTrailer;
