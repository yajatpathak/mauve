import { Heading } from "@chakra-ui/react";
import useLookupPlatform from "../hooks/useLookupPlatform";
import useLookupGenre from "../hooks/useLookupGenre";
import useGameQuery from "../stores/gameQueryStore";

function GameHeading() {
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const genre = useLookupGenre(genreId);

  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const platform = useLookupPlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} marginX={2}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
