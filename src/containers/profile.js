import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileComponent from "../components/profile";
import { Redirect } from "react-router-dom";

function Profile({ id, isFetching, user }) {
  if (isFetching) return "loading";
  if (!user) return <Redirect to={"/"} />;
  return (
    <ProfileComponent
      name={user.name}
      email={user.email}
      website={user.website}
      address={user.address}
      phone={user.phone}
    />
  );
}

Profile.propTypes = {
  id: PropTypes.number.isRequired
};

const mapStateToProps = (state, { id }) => ({
  user: state.users.users.find(user => user.id === id),
  isFetching: state.users.isFetching
});

export default connect(mapStateToProps)(Profile);
