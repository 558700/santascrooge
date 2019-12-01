import React from "react";
import styled from "styled-components";

import "../styles/index.css";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

const Test = styled.p.attrs({
  className: "italic text-black "
})``;

const IndexPage = () => {
  window.onresize = function() {
    console.log("herre");
    document.body.height = window.innerHeight;
  };
  window.onresize(); // called to initially set the height.

  return (
    <div>
      <Layout>
        <SEO title="Home" />
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
    </div>
  );
};

export default IndexPage;
