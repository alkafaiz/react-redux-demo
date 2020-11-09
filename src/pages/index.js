import React from "react";
import PostCards from "../containers/postCards";
import Layout from "../components/layout";
import { Heading, Dividerx } from "@chakra-ui/core";

document.title = "Home";
export default function Index() {
  return (
    <Layout>
      <Heading>All Posts</Heading>
      <Divider my={8} />
      <PostCards />
    </Layout>
  );
}
