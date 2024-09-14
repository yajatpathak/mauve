import { useParams } from "react-router-dom";
import useLookupPublisher from "../hooks/useLookupPublisher";
import { Text } from "@chakra-ui/react";
import useGameQuery from "../stores/gameQueryStore";
import GameGrid from "../components/GameGrid";

function PublisherDetailPage() {
  const { slug } = useParams();
  const { data: publisher, isLoading, error } = useLookupPublisher(slug!);
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

  setPublisherId(publisher?.id);

  return (
    <>
      <GameGrid />
    </>
  );
}

export default PublisherDetailPage;
