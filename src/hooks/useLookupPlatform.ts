import usePlatforms from "./usePlatforms";

function useLookupPlatform(id?: number) {
  const platforms = usePlatforms();
  return platforms.data?.results.find((p) => p.id === id);
}

export default useLookupPlatform;
