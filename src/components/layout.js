import React from "react";
import { Box } from "@chakra-ui/core";

export default function Layout({ children }) {
  return (
    <Box maxW="1200px" marginX="auto" py="80px">
      {children}
    </Box>
  );
}
