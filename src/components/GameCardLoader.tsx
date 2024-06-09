import {
  Card,
  CardBody,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  useBreakpointValue,
} from "@chakra-ui/react";

function GameCardLoader() {
  const breakpoint =
    useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }) || 4;

  const skeleton = [1, 2, 3, 4].slice(0, breakpoint);

  return (
    <SimpleGrid columns={breakpoint} padding="10px" spacing={6}>
      {skeleton.map((id) => (
        <Card height="330px" borderRadius={10} key={id}>
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default GameCardLoader;
