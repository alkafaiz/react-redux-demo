import React from "react";
import PropTypes from "prop-types";
import { Heading, Text } from "@chakra-ui/core";

function Article({ title, body }) {
  return (
    <div>
      <Heading mb={5}>{title}</Heading>
      <Text
        color="gray.500"
        dangerouslySetInnerHTML={{
          __html: body
        }}
      ></Text>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Article;
