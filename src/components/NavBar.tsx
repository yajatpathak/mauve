import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>Mauve</Text>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
