/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

import "../styles/index.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="mobile:px-8 px-20 min-h-full">{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
