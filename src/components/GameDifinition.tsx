import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameDefinitionProps {
  term: string;
  children: ReactNode | ReactNode[];
}

function GameDefinition({ term, children }: GameDefinitionProps) {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="grey">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default GameDefinition;
