import React from "react";
import PropTypes from "prop-types";
import { Flex, Avatar, Text, Link } from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";

function AuthorCard({ name, id, website, postCount }) {
  return (
    <Flex align="center" mb={4}>
      <Avatar name="name" />
      <Flex ml={4} direction="column">
        <Text color="gray.500" fontWeight="semibold" letterSpacing="wide">
          <Link as={RouterLink} to={`/users/${id}`}>
            {name}
          </Link>
        </Text>
        <Text color="gray.500" letterSpacing="wide" fontSize="sm">
          {website} &bull; {postCount} posts
        </Text>
      </Flex>
    </Flex>
  );
}

AuthorCard.propTypes = {
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  postCount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default AuthorCard;
