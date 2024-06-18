import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameDefinitionProps {
  term: string;
  children: ReactNode[] | ReactNode;
}

function GameDefinition({ term, children }: GameDefinitionProps) {
  if (!children) return;
  if (Array.isArray(children) && !children[0]) return;

  return (
    <Box marginY={2}>
      <Heading as="dt" fontSize="md" color="grey">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default GameDefinition;
