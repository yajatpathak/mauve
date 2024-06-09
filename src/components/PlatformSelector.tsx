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
import { Platform } from "../hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) {
  const { data, error } = usePlatforms();

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform === null ? "Platforms" : selectedPlatform.name}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
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
