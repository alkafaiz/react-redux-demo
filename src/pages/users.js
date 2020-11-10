import React, { useEffect } from "react";
import Layout from "../containers/layout";
import { Heading, Divider } from "@chakra-ui/core";
import UserCards from "../containers/userCards";

export default function UsersPage() {
  useEffect(() => {
    document.title = "Users";
  }, []);
  return (
    <Layout>
      <Heading>All Users</Heading>
      <Divider my={8} />
      <UserCards />
    </Layout>
  );
}
