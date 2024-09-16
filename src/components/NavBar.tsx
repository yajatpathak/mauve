import { Box, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQuery from "../stores/gameQueryStore";
import { useState } from "react";
import useGameStore from "../stores/gameStore";
import usePublisherStore from "../stores/publisherStore";
import { FaGithub } from "react-icons/fa";

function NavBar() {
  const clearGameQuery = useGameQuery((s) => s.clearGameQuery);
  const clearGame = useGameStore((s) => s.clearGame);
  const clearPublisher = usePublisherStore((s) => s.clearPublisher);
  const [lenErr, setLenErr] = useState(false);

  return (
    <>
      <HStack padding="10px">
        <Link
          to="/"
          onClick={() => {
            clearGameQuery();
            clearGame();
            clearPublisher();
          }}
        >
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <SearchInput setLenErr={setLenErr} />
        <a href="https://github.com/yajatpathak/mauve">
          <IconButton
            icon={<FaGithub />}
            aria-label="Github Repository"
            variant="outline"
            colorScheme="brand"
          />
        </a>
        <ColorModeSwitch />
      </HStack>
      {lenErr ? (
        <Text marginX={100} marginBottom={3} colorScheme="purple">
          *The search input should be atleast 3 characters.
        </Text>
      ) : (
        <Box padding="18px"></Box>
      )}
    </>
  );
}

export default NavBar;
