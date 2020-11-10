import React from "react";
import UserCardComponent from "../components/userCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function UserCard({ id, name, email, city, website, postCount }) {
  return (
    <UserCardComponent
      id={id}
      name={name}
      email={email}
      city={city}
      website={website}
      postCount={postCount}
    />
  );
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

const mapStateToProps = (state, { id }) => ({
  postCount: state.posts.posts.filter(post => post.userId === id).length
});

export default connect(mapStateToProps)(UserCard);
