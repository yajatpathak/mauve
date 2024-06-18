import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import useGameStore from "../gameStore";
import useGameAdditions from "../hooks/useGameAdditions";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface GameAdditionsProps {
  term: "DLCs" | "Parents" | "More In Series";
}

function GameAdditions({ term }: GameAdditionsProps) {
  const gamePk = useGameStore((s) => s.game.id);
  const type =
    term === "DLCs"
      ? "additions"
      : term === "Parents"
      ? "parent-games"
      : "game-series";
  const { data: additions, isLoading, error } = useGameAdditions(gamePk, type);

  const { colorMode } = useColorMode();

  if (error) {
    console.log(`GameAdditions(${term}): ${error.message}`);
    return;
  }
  if (isLoading || !additions || !additions[0]) return;

  //this is being used to give outline to text
  let textShadow;
  if (colorMode === "dark")
    textShadow =
      "1px 1px #000000, -1px -1px #000000, 1px -1px #000000, -1px 1px #000000";
  else
    textShadow =
      "1px 1px #ffffff, -1px -1px #ffffff, 1px -1px #ffffff, -1px 1px #ffffff";

  return (
    <>
      <Heading marginTop={5} fontSize="lg" color="grey">
        {term}
      </Heading>
      <Box boxShadow="dark-lg" padding="10px" overflow="scroll">
        <HStack spacing={4}>
          {additions.map((add) => (
            <Link key={add.id} to={"/games/" + add.slug}>
              <Card
                borderRadius={10}
                overflow="hidden"
                bgImg={getCroppedImageUrl(add.background_image)}
                bgRepeat="no-repeat"
                bgSize="contain"
                width="240px"
                height="160px"
                objectFit="cover"
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .15s ease-in",
                }}
              >
                <CardBody alignContent="flex-end">
                  <Text textShadow={textShadow}>{add.name}</Text>
                </CardBody>
              </Card>
            </Link>
          ))}
        </HStack>
      </Box>
    </>
  );
}

export default GameAdditions;
