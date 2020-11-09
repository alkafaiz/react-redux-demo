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
import PropTypes from "prop-types";

function PostCard({ body, title }) {
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
          <Avatar size="sm" name="Ryan Florence" />
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
            ml="2"
          >
            <Link>Ryan Florence</Link> &bull; 2 <Icon name="chat" />
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
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default PostCard;
