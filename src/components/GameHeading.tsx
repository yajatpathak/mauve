import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useLookupPlatform from "../hooks/useLookupPlatform";
import useLookupGenre from "../hooks/useLookupGenre";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: GameHeadingProps) {
  const genre = useLookupGenre(gameQuery.genreId);
  const platform = useLookupPlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} marginX={2}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
