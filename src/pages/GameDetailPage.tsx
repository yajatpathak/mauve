import { useParams } from "react-router-dom";
import useLookupGame from "../hooks/useLookupGame";
import {
  Badge,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";
import BannerContainer from "../components/BannerContainer";
import useGameStore from "../gameStore";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useLookupGame(slug!);
  const setGame = useGameStore((s) => s.setGame);

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  if (!game) return <Text>Error: Could not fetch game.</Text>;

  setGame(game);

  return (
    <BannerContainer>
      <SimpleGrid
        marginX="15px"
        marginBottom="15px"
        columns={{ base: 1, md: 2 }}
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
