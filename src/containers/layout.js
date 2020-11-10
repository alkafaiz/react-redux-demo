import React, { useEffect } from "react";
import LayoutComponent from "../components/layout";
import { fetchInitialData } from "../features/posts/posts.actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Layout({ children, fetchInitialData, hasLoaded, maxWidth }) {
  useEffect(() => {
    if (hasLoaded) return;

    fetchInitialData();
  }, [fetchInitialData, hasLoaded]);

  return <LayoutComponent maxWidth={maxWidth}>{children}</LayoutComponent>;
}

const mapStateToProps = state => ({
  hasLoaded: state.posts.hasLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => dispatch(fetchInitialData())
});

Layout.propTypes = {
  maxWidth: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
