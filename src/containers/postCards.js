import React from "react";
import PostCard from "./postCard";
import { Flex, CircularProgress } from "@chakra-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  selectPostsByUserId,
  selectPosts
} from "../features/posts/posts.selector";

function PostCards({ isFetching, posts }) {
  if (isFetching) return <CircularProgress isIndeterminate></CircularProgress>;
  return (
    <Flex wrap="wrap">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
          commentCount={post.comments.length}
        />
      ))}
    </Flex>
  );
}

PostCards.propTypes = {
  userId: PropTypes.number
};

const mapStateToProps = (state, { userId }) => ({
  isFetching: state.posts.isFetching,
  posts: userId ? selectPostsByUserId(state, { userId }) : selectPosts(state)
});

export default connect(mapStateToProps)(PostCards);
