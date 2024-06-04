import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

function CriticScore({ score }: CriticScoreProps) {
  let color = score > 80 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
}

export default CriticScore;
