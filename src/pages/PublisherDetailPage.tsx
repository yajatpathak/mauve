import { useParams } from "react-router-dom";
import useLookupPublisher from "../hooks/useLookupPublisher";
import { Text } from "@chakra-ui/react";

function PublisherDetailPage() {
  const { slug } = useParams();
  const { data: publisher, isLoading, error } = useLookupPublisher(slug!);

  if (error) {
    console.log("PublisherDetailPage: " + error.message);
    return <Text>{error.message}</Text>;
  }

  if (isLoading) return;

  if (!publisher) {
    console.log("PublisherDetailPage: Could not publisher game.");
    return <Text>Error: Could not fetch game.</Text>;
  }

  return <></>;
}

export default PublisherDetailPage;
