import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let message;
  if (isRouteErrorResponse(error)) message = "This page does not exist.";
  else message = "An unexpected error occourred.";

  return (
    <VStack justify="center" height="80vh">
      <Heading>Oops</Heading>
      <Text>{message}</Text>
      <Box margin={4}>
        <Link to="/">
          <Button colorScheme="brand">Home Page</Button>
        </Link>
      </Box>
    </VStack>
  );
}

export default ErrorPage;