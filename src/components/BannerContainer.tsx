import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BannerContainerProps {
  banner: string;
  children: ReactNode;
}

function BannerContainer({ banner, children }: BannerContainerProps) {
  const { colorMode } = useColorMode();

  let gradient;
  if (colorMode === "dark")
    gradient =
      "linear(to-b, rgba(18,18,18,1.0),rgba(18,18,18,0.7), rgba(18,18,18,1.0))";
  else
    gradient =
      "linear(to-b, rgba(255,255,255,1.0),rgba(255,255,255,0.7), rgba(255,255,255,1.0))";

  return (
    <Box
      bgImage={banner}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box bgGradient={gradient} backdropFilter="auto" backdropBlur="1px">
        {children}
      </Box>
    </Box>
  );
}

export default BannerContainer;
