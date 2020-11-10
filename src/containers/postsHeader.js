import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Heading } from "@chakra-ui/core";

function PostsHeader({ postCount, isFetching }) {
  return (
    <Heading my={5} as="h4" size="sm">
      Posts ({isFetching ? "loading" : postCount})
    </Heading>
  );
}

PostsHeader.propTypes = {
  id: PropTypes.number.isRequired
};

const mapStateToProps = (state, { id }) => ({
  isFetching: state.posts.isFetching,
  postCount: state.posts.posts.filter(post => post.userId === id).length
});

export default connect(mapStateToProps)(PostsHeader);
