import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import useGameStore from "../stores/gameStore";

function ExpandableText() {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  const children = useGameStore((s) => s.game.description_raw);

  if (!children) return;

  if (children.length <= limit) return <Text marginY={2}>{children}</Text>;

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
