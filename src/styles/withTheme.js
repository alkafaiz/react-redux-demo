import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
      ...theme.colors.brand
    }
  }
};

// Use at the root of your app
const withTheme = Component => props => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withTheme;
