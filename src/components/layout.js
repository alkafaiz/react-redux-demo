import React from "react";
import { Box } from "@chakra-ui/core";
import PropTypes from "prop-types";

function Layout({ children, maxWidth }) {
  return (
    <Box maxW={maxWidth} marginX="auto" py="80px">
      {children}
    </Box>
  );
}

Layout.propTypes = {
  maxWidth: PropTypes.string
};

Layout.defaultProps = {
  maxWidth: "1200px"
};

export default Layout;
