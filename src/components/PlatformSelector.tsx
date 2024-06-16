import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useLookupPlatform from "../hooks/useLookupPlatform";
import useGameQuery from "../gameQueryStore";

function PlatformSelector() {
  const { data, error } = usePlatforms();

  const selectedPlatformId = useGameQuery((s) => s.gameQuery.platformId);
  const selectedPlatform = useLookupPlatform(selectedPlatformId);

  const setPlatformId = useGameQuery((s) => s.setPlatformId);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
