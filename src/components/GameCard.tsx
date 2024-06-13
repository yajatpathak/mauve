import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  //if platform list does not exist
  if (!game.parent_platforms) game.parent_platforms = [];

  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Link to={"/games/" + game.slug}>
        <Image src={getCroppedImageUrl(game.background_image)} width="100%" />
      </Link>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Link to={"/games/" + game.slug}>
          <Heading fontSize="2xl">{game.name}</Heading>
        </Link>
      </CardBody>
    </Card>
  );
}

export default GameCard;
