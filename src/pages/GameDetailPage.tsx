import { useParams } from "react-router-dom";
import useLookupGame from "../hooks/useLookupGame";
import { Badge, Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useLookupGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  if (!game) return <Text>Error: Could not fetch game.</Text>;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <Badge borderRadius={4} paddingY={1} paddingX={2} margin={2}>
        {game.esrb_rating.name}
      </Badge>
      <CriticScore score={game.metacritic} />
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
}

export default GameDetailPage;
