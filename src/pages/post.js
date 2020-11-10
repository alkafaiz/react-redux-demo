import React from "react";
import Layout from "../containers/layout";
import Breadcrumb from "../containers/breadcrumb";
import Post from "../containers/post";
import { Divider } from "@chakra-ui/core";

export default function PostPage({ history, match }) {
  return (
    <Layout maxWidth="1000px">
      <Breadcrumb pathname={history.location.pathname} />
      <Divider my={8} />
      <Post id={parseInt(match.params.postId)} />
    </Layout>
  );
}
