import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQuery from "../gameQueryStore";

function NavBar() {
  const clearGameQuery = useGameQuery((s) => s.clearGameQuery);

  return (
    <HStack padding="10px">
      <Link to="/" onClick={clearGameQuery}>
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
