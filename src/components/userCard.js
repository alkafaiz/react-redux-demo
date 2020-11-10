import React from "react";
import { Box, Text, Avatar, Link, PseudoBox } from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function UserCard({ id, name, email, city, website, postCount }) {
  return (
    <PseudoBox
      maxW="sm"
      borderWidth={"1px"}
      rounded="lg"
      overflow="hidden"
      mb={6}
      mr={4}
      bg="white"
      _hover={{ bg: "gray.50" }}
    >
      <Box p="6">
        <Avatar size="lg" name={name} />

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          <Link as={RouterLink} to={`/users/${id}`}>
            {name}
          </Link>
        </Box>
        <Text color="gray.500" letterSpacing="wide" fontSize="sm">
          {email}
        </Text>
        <Text color="gray.500" letterSpacing="wide" fontSize="sm">
          {city}
        </Text>
        <Text color="gray.500" letterSpacing="wide" fontSize="sm">
          {postCount} posts
        </Text>
      </Box>
    </PseudoBox>
  );
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  postCount: PropTypes.number.isRequired
};

export default UserCard;
