import { useParams } from "react-router-dom";
import useLookupGame from "../hooks/useLookupGame";
import {
  Badge,
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";
import BannerContainer from "../components/BannerContainer";
import useGameStore from "../stores/gameStore";
import GameAdditions from "../components/GameAdditions";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useLookupGame(slug!);
  const setGame = useGameStore((s) => s.setGame);

  if (error) {
    console.log("GameDetailPage: " + error.message);
    return <Text>{error.message}</Text>;
  }
  if (isLoading) {
    return (
      <Box marginX="15px">
        <Skeleton height="40px" width="200px" />
        <SkeletonText
          spacing="3"
          skeletonHeight="3"
          width="430px"
          marginTop={4}
        />
      </Box>
    );
  }

  if (!game) {
    console.log("GameDetailPage: Could not fetch game.");
    return <Text>Error: Could not fetch game.</Text>;
  }

  setGame(game);

  return (
    <BannerContainer>
      <SimpleGrid
        marginX="15px"
        marginBottom="15px"
        columns={{ base: 1, lg: 2 }}
        spacing={5}
      >
        <GridItem>
          <Heading>{game.name}</Heading>
          <Badge borderRadius={4} paddingY={1} paddingX={2} marginRight={2}>
            {game.esrb_rating ? game.esrb_rating.name : "Not Rated"}
          </Badge>
          <CriticScore score={game.metacritic} />
          <ExpandableText />
          <GameAttributes />
          <GameAdditions term="DLCs" />
          <GameAdditions term="Parents" />
          <GameAdditions term="More In Series" />
        </GridItem>
        <GridItem>
          <GameTrailer />
          <GameScreenShots />
        </GridItem>
      </SimpleGrid>
    </BannerContainer>
  );
}

export default GameDetailPage;
