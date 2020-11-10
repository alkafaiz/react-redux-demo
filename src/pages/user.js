import React from "react";
import Layout from "../containers/layout";
import Breadcrumb from "../containers/breadcrumb";
import { Divider } from "@chakra-ui/core";
import Profile from "../containers/profile";
import PostCards from "../containers/postCards";
import PostsHeader from "../containers/postsHeader";

export default function UserPage({ history, match }) {
  return (
    <Layout>
      <Breadcrumb pathname={history.location.pathname} />
      <Divider my={8} />
      <Profile id={parseInt(match.params.userId)} />
      <PostsHeader userId={parseInt(match.params.userId)} />
      <PostCards userId={parseInt(match.params.userId)} />
    </Layout>
  );
}
