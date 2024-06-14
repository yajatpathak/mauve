import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQuery from "../gameQueryStore";
import { useState } from "react";

function NavBar() {
  const clearGameQuery = useGameQuery((s) => s.clearGameQuery);
  const [lenErr, setLenErr] = useState(false);

  return (
    <>
      <HStack padding="10px">
        <Link to="/" onClick={clearGameQuery}>
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <SearchInput setLenErr={setLenErr} />
        <ColorModeSwitch />
      </HStack>
      {lenErr ? (
        <Text marginX={100} marginBottom={3} color="brand.100">
          *The search input should be atleast 3 characters.
        </Text>
      ) : (
        <Box padding="18px"></Box>
      )}
    </>
  );
}

export default NavBar;
