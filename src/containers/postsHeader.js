import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Heading } from "@chakra-ui/core";
import {
  selectPostCountByUserId,
  isFetchingPosts
} from "../redux/selectors/posts.selector";

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
  isFetching: isFetchingPosts(state),
  postCount: selectPostCountByUserId(state, { userId })
});

export default connect(mapStateToProps)(PostsHeader);
