import React, { useEffect } from "react";
import PostCards from "../containers/postCards";
import Layout from "../containers/layout";
import { Heading, Divider, Flex, Link } from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function Index() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <Layout>
      <Flex justifyContent="space-between" align="center">
        <Heading>All Posts</Heading>
        <Link as={RouterLink} to="/">
          Posts
        </Link>
        <Link as={RouterLink} to="/albums">
          Albums
        </Link>
        <Link as={RouterLink} to="/users">
          Users
        </Link>
      </Flex>
      <Divider my={8} />
      <PostCards />
    </Layout>
  );
}
