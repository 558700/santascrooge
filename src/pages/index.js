import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import "../styles/index.css";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const Test = styled.p.attrs({
  className: "italic text-black "
})``;

const IndexPage = () => (
  <body>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Test>HELLO</Test>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    <script
      dangerouslySetInnerHTML={{
        __html: `if (window.netlifyIdentity) {
                  window.netlifyIdentity.on("init", user => {
                    if (!user) {
                      window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                      });
                    }
                  });
                }`
      }}
    />
  </body>
);

export default IndexPage;
