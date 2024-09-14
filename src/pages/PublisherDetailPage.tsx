import { useParams } from "react-router-dom";
import useLookupPublisher from "../hooks/useLookupPublisher";
import { Box, Text } from "@chakra-ui/react";
import useGameQuery from "../stores/gameQueryStore";
import GameGrid from "../components/GameGrid";
import PublisherBanner from "../components/PublisherBanner";
import usePublisherStore from "../stores/publisherStore";

function PublisherDetailPage() {
  const { slug } = useParams();
  const { data: publisher, isLoading, error } = useLookupPublisher(slug!);
  const setPublisher = usePublisherStore((s) => s.setPublisher);
  const setPublisherId = useGameQuery((s) => s.setPublisherId);

  if (error) {
    console.log("PublisherDetailPage: " + error.message);
    return <Text>{error.message}</Text>;
  }

  if (isLoading) return;

  if (!publisher) {
    console.log("PublisherDetailPage: Could not fetch publisher.");
    return <Text>Error: Could not fetch publisher.</Text>;
  }

  setPublisher(publisher);
  setPublisherId(publisher?.id);

  return (
    <Box px={10}>
      <PublisherBanner />
      <GameGrid />
    </Box>
  );
}

export default PublisherDetailPage;
