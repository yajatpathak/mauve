import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  children: string | undefined;
}

function ExpandableText({ children }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text marginY={2}>
      {summary}
      <Button
        colorScheme="brand"
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
