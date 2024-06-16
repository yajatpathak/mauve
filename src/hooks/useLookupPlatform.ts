import usePlatforms from "./usePlatforms";

function useLookupPlatform(id?: number) {
  const platforms = usePlatforms();
  return platforms.data?.find((p) => p.id === id);
}

export default useLookupPlatform;
