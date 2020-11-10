import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Heading } from "@chakra-ui/core";
import { selectPostCountByUserId } from "../features/posts/posts.selector";

function PostsHeader({ postCount, isFetching }) {
  return (
    <Heading my={5} as="h4" size="sm">
      Posts ({isFetching ? "loading" : postCount})
    </Heading>
  );
}

PostsHeader.propTypes = {
  userId: PropTypes.number.isRequired
};

const mapStateToProps = (state, { userId }) => ({
  isFetching: state.posts.isFetching,
  postCount: selectPostCountByUserId(state, { userId })
});

export default connect(mapStateToProps)(PostsHeader);
