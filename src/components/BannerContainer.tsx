import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import useGameStore from "../stores/gameStore";

interface BannerContainerProps {
  children: ReactNode;
}

function BannerContainer({ children }: BannerContainerProps) {
  const { colorMode } = useColorMode();
  const banner = useGameStore((s) => s.game.background_image);
  const [isLoading, setLoading] = useState(false);

  let gradient;
  if (colorMode === "dark")
    gradient =
      "linear(to-b, rgba(18,18,18,1.0),rgba(18,18,18,0.6), rgba(18,18,18,1.0))";
  else
    gradient =
      "linear(to-b, rgba(255,255,255,1.0),rgba(255,255,255,0.6), rgba(255,255,255,1.0))";

  return (
    <Box
      bgImage={isLoading ? banner : undefined}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        bgGradient={gradient}
        backdropFilter="auto"
        backdropBlur="1px"
        onLoad={() => setLoading(true)}
      >
        {children}
      </Box>
    </Box>
  );
}

export default BannerContainer;
