import { useParams } from "react-router-dom";
import useLookupGame from "../hooks/useLookupGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useLookupGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
}

export default GameDetailPage;
