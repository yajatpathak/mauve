import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="brand" //color scheme only takes color name
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" && <Text whiteSpace="nowrap">Dark Mode</Text>}
      {colorMode === "light" && <Text whiteSpace="nowrap">Light Mode</Text>}
    </HStack>
  );
}

export default ColorModeSwitch;
