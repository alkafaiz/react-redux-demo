import React from "react";
import { Flex, Stack, Heading, Avatar, Text } from "@chakra-ui/core";
import PropTypes from "prop-types";

function Profile({ name, email, website, address, phone }) {
  return (
    <Flex mb={8} align="center" justifyContent="space-between">
      <Stack>
        <Heading>{name}</Heading>
        <Text>{email}</Text>
        <Text>{website}</Text>
        <Text>{address.city}</Text>
        <Text>{phone}</Text>
      </Stack>
      <Avatar size="2xl" name={name} />
    </Flex>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired
};

export default Profile;
