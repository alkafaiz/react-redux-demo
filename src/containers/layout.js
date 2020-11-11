import React, { useEffect } from "react";
import LayoutComponent from "../components/layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchInitialData } from "../redux/actions/posts.action";
import { dataHasLoaded } from "../redux/selectors/posts.selector";

function Layout({ children, fetchInitialData, hasLoaded, maxWidth }) {
  useEffect(() => {
    if (hasLoaded) return;

    fetchInitialData();
  }, [fetchInitialData, hasLoaded]);

  return <LayoutComponent maxWidth={maxWidth}>{children}</LayoutComponent>;
}

const mapStateToProps = state => ({
  hasLoaded: dataHasLoaded(state)
});

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => dispatch(fetchInitialData())
});

Layout.propTypes = {
  maxWidth: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
