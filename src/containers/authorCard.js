import React from "react";
import AuthorCardComponent from "../components/authorCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function AuthorCard({ user, postCount }) {
  return (
    <AuthorCardComponent
      name={user.name}
      id={user.id}
      website={user.website}
      postCount={postCount}
    />
  );
}

const mapStateToProps = (state, { id }) => ({
  user: state.users.users.find(user => user.id === id),
  postCount: state.posts.posts.filter(post => post.userId === id).length
});

AuthorCard.propTypes = {
  id: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(AuthorCard);
