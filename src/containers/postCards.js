import React from "react";
import PostCard from "./postCard";
import { Flex, CircularProgress } from "@chakra-ui/core";
import { connect } from "react-redux";

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

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts
});

export default connect(mapStateToProps)(PostCards);
