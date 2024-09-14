import { Box, Heading, useColorMode } from "@chakra-ui/react";
import usePublisherStore from "../stores/publisherStore";
import ExpandableText from "./ExpandableText";

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
      borderRadius={10}
      marginBottom={10}
      overflow="hidden"
      height={80}
    >
      <Box
        position="absolute"
        bgColor={overlay}
        backdropFilter="blur(1px)"
        width="50%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        overflow="auto"
        padding={4}
      >
        <Heading fontSize={{ base: "3xl", md: "4xl" }}>{name}</Heading>
        <ExpandableText>{desc}</ExpandableText>
      </Box>
    </Box>
  );
}

export default PublisherBanner;
