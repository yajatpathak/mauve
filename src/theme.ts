import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

//200 is the default color vaule
const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#955A74",
      200: "#785276",
      300: "#38324C",
    },
  },
});

export default theme;
