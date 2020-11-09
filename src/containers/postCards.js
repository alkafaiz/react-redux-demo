import React, { useEffect } from "react";
import PostCardComponent from "../components/postCard";
import { Flex, CircularProgress } from "@chakra-ui/core";
import { connect } from "react-redux";
import { fetchPosts } from "../features/posts/posts.actions";

function PostCards({ isFetching, posts, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (isFetching) return <CircularProgress isIndeterminate></CircularProgress>;
  return (
    <Flex wrap="wrap">
      {posts.map((post, index) => (
        <PostCardComponent key={index} title={post.title} body={post.body} />
      ))}
    </Flex>
  );
}

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCards);
