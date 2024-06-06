import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: NavBarProps) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
