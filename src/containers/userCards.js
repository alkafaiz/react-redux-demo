import React from "react";
import UserCard from "./userCard";
import { Flex, CircularProgress } from "@chakra-ui/core";
import { connect } from "react-redux";

function UserCards({ isFetching, users }) {
  if (isFetching) return <CircularProgress isIndeterminate></CircularProgress>;
  return (
    <Flex wrap="wrap">
      {users.map((user, index) => (
        <UserCard
          key={index}
          id={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
          website={user.website}
        />
      ))}
    </Flex>
  );
}

const mapStateToProps = state => ({
  isFetching: state.users.isFetching,
  users: state.users.users
});

export default connect(mapStateToProps)(UserCards);
