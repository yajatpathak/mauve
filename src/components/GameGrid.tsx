import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import React from "react";

interface GameGridProps {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: GameGridProps) {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (isLoading) {
    const skeleton = [1, 2, 3, 4];
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading && skeleton.map((id) => <GameCardSkeleton key={id} />)}
      </SimpleGrid>
    );
  }

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {data?.pages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          marginY={5}
          marginX="10px"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
}

export default GameGrid;
