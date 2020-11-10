import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Article from "../components/article";
import Comment from "../components/comment";
import { Heading, Stack } from "@chakra-ui/core";
import AuthorCard from "../containers/authorCard";

function Post({ post, isFetching }) {
  useEffect(() => {
    if (post) {
      document.title = post.title;
    }
  }, [post]);

  if (isFetching) return "Loading";
  return (
    <div>
      <AuthorCard id={post.userId} />
      <Article title={post.title} body={post.body} />
      <Heading my={5} as="h4" size="sm">
        Comments ({post.comments.length})
      </Heading>
      <Stack shouldWrapChildren spacing={8}>
        {post.comments.map(comment => (
          <Comment
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </Stack>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired
};

const mapStateToProps = (state, { id }) => ({
  post: state.posts.posts.find(post => post.id === id),
  isFetching: state.posts.isFetching
});

export default connect(mapStateToProps)(Post);