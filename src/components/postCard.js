import React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Link,
  Icon,
  PseudoBox
} from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function PostCard({ id, authorId, authorName, body, title, commentCount }) {
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
        <Flex alignItems="center" mb={3}>
          <Avatar size="sm" name={authorName} />
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
            ml="2"
          >
            <Link as={RouterLink} to={`/users/${authorId}`}>
              {authorName}
            </Link>{" "}
            &bull; {commentCount} <Icon name="chat" />
          </Box>
        </Flex>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {title}
        </Box>
        <Text
          my={2}
          isTruncated
          color="gray.500"
          dangerouslySetInnerHTML={{
            __html: body
          }}
        />
        <Link
          as={RouterLink}
          to={`/posts/${id}`}
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="sm"
        >
          Read more
        </Link>
      </Box>
    </PseudoBox>
  );
}

PostCard.propTypes = {
  authorName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired
};

export default PostCard;
