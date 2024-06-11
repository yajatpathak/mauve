import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function GameGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (isLoading) {
    return <GameCardLoader />;
  }

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<GameCardLoader />}
    >
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
    </InfiniteScroll>
  );
}

export default GameGrid;
