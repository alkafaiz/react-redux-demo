import React, { useEffect } from "react";
import PostCards from "../containers/postCards";
import Layout from "../containers/layout";
import { Heading, Divider } from "@chakra-ui/core";

export default function Index() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <Layout>
      <Heading>All Posts</Heading>
      <Divider my={8} />
      <PostCards />
    </Layout>
  );
}
