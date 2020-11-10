import React, { useEffect } from "react";
import PostCard from "./postCard";
import { Flex, CircularProgress } from "@chakra-ui/core";
import { connect } from "react-redux";
import { fetchInitialData } from "../features/posts/posts.actions";

function PostCards({ isFetching, posts, fetchInitialData }) {
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

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

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => dispatch(fetchInitialData())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCards);
