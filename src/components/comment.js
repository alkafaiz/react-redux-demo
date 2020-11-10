import React from "react";
import PropTypes from "prop-types";
import { Flex, Avatar, Text } from "@chakra-ui/core";

function Comment({ name, email, body }) {
  return (
    <Flex direction="column">
      <Flex align="center">
        <Avatar size="md" name={name} />
        <Flex ml={4} direction="column">
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
          >
            {name}
          </Text>
          <Text color="gray.500" letterSpacing="wide" fontSize="sm">
            {email}
          </Text>
        </Flex>
      </Flex>
      <Text color="gray.600" pl={"64px"}>
        {body}
      </Text>
    </Flex>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Comment;
