import React from "react";
import Layout from "../containers/layout";
import { Heading, Divider } from "@chakra-ui/core";
import UserCards from "../containers/userCards";

export default function UsersPage() {
  return (
    <Layout>
      <Heading>All Users</Heading>
      <Divider my={8} />
      <UserCards />
    </Layout>
  );
}
