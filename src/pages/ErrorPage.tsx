import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import useGameQuery from "../stores/gameQueryStore";
import useGameStore from "../stores/gameStore";
import usePublisherStore from "../stores/publisherStore";

function ErrorPage() {
  const error = useRouteError();

  const clearGameQuery = useGameQuery((s) => s.clearGameQuery);
  const clearGame = useGameStore((s) => s.clearGame);
  const clearPublisher = usePublisherStore((s) => s.clearPublisher);

  let message;
  if (isRouteErrorResponse(error)) message = "This page does not exist.";
  else message = "An unexpected error occourred.";

  return (
    <VStack justify="center" height="80vh">
      <Heading>Oops</Heading>
      <Text>{message}</Text>
      <Box margin={4}>
        <Link to="/">
          <Button
            colorScheme="brand"
            onClick={() => {
              clearGameQuery();
              clearGame();
              clearPublisher();
            }}
          >
            Home Page
          </Button>
        </Link>
      </Box>
    </VStack>
  );
}

export default ErrorPage;
