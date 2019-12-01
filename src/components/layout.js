/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../styles/index.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <Main>{children}</Main>
      </div>
    </>
  );
};

const Main = styled.main.attrs({
  className: "w-screen min-h-screen px-4 py-6"
})`
  max-width: 1500px;
  margin: 0 auto;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
