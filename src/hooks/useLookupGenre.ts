import useGenres from "./useGenres";

function useLookupGenre(id?: number) {
  const genres = useGenres();
  return genres.data?.find((g) => g.id === id);
}

export default useLookupGenre;
