import React from "react";
import PropTypes from "prop-types";
import PostCardComponent from "../components/postCard";
import { connect } from "react-redux";

function PostCard({
  id,
  userId,
  title,
  body,
  author,
  isFetchingUser,
  commentCount
}) {
  return (
    <PostCardComponent
      id={id}
      authorName={isFetchingUser ? "loading" : author.name}
      authorId={userId}
      body={body}
      title={title}
      commentCount={commentCount}
    />
  );
}

const mapStateToProps = (state, { userId }) => ({
  author: state.users.users.find(user => user.id === userId),
  isFetchingUser: state.users.isFetching
});

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(PostCard);
