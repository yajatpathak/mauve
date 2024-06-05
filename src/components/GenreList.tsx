import { List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>{genre.name}</ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
