import { Box, Heading, useColorMode } from "@chakra-ui/react";
import usePublisherStore from "../stores/publisherStore";

function PublisherBanner() {
  const { colorMode } = useColorMode();
  const name = usePublisherStore((s) => s.publisher.name);
  const banner = usePublisherStore((s) => s.publisher.image_background);
  const desc = usePublisherStore((s) => s.publisher.description);

  let overlay;
  if (colorMode === "dark") overlay = "rgba(18,18,18,0.6)";
  else overlay = "rgba(255,255,255,0.6)";

  return (
    <Box
      position="relative"
      bgImage={banner}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      paddingBottom="25%"
      borderRadius={10}
      marginBottom={10}
    >
      <Box
        right={0}
        top={0}
        position="absolute"
        bgColor={overlay}
        backdropFilter="auto"
        backdropBlur="1px"
        width="50%"
        height="100%"
        display="flex"
        alignItems="center"
        paddingX={3}
      >
        <Heading fontSize="4xl">{name}</Heading>
      </Box>
    </Box>
  );
}

export default PublisherBanner;
