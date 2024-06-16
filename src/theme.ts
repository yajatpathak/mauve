import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

//200 is the default color vaule
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    brand: {
      50: "#fcedf9",
      100: "#e2d1e1",
      200: "#ccb3cb",
      300: "#b795b5",
      400: "#a1779f",
      500: "#875d85",
      600: "#6a4868",
      700: "#4d344b",
      800: "#2f1e2f",
      900: "#140714",
    },
  },
});

export default theme;
