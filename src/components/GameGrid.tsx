import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface GameGridProps {
  selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: GameGridProps) {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4];

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={3}
    >
      {isLoading && skeleton.map((id) => <GameCardSkeleton key={id} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
