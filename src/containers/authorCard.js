import React from "react";
import AuthorCardComponent from "../components/authorCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectPostCountByUserId } from "../features/posts/posts.selector";
import { selectUserById } from "../features/users/users.selector";

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
  user: selectUserById(state, { id }),
  postCount: selectPostCountByUserId(state, { userId: id })
});

AuthorCard.propTypes = {
  id: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(AuthorCard);
