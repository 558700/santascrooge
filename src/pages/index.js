import React, { useState } from "react";

import "../styles/index.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  LeftContainer,
  Heading,
  Input,
  Headline,
  SubHeadline,
  ImageContainer,
  RightContainer
} from "../components";

import jc from "../images/jc.jpg";
import bj from "../images/bj.jpg";

const IndexPage = () => {
  const [issue, setIssue] = useState("scone toppings");
  const [jcResponse, setJCResponse] = useState(
    "i make my own jam :) do u want some?"
  );
  const [bjResponse, setBJResponse] = useState("cream on first u peasant");

  window.onresize = function() {
    console.log("herre");
    document.body.height = window.innerHeight;
  };
  window.onresize(); // called to initially set the height.

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <LeftContainer>
          <Heading>Issue:</Heading>
          <Input>{issue}</Input>
          <Heading>Jeremy's comment:</Heading>
          <Input>{jcResponse}</Input>
          <Heading>Boris' comment:</Heading>
          <Input>{bjResponse}</Input>
        </LeftContainer>
        <RightContainer>
          <div>
            <div className="bg-darkblue">
              <Headline>Corbyn or Johnson?</Headline>
              <SubHeadline>
                Be informed. Compare them on the issues that matter.
              </SubHeadline>
            </div>
            <div className="bg-lightblue">
              <p>Issue:</p>
              <Input>{issue}</Input>
              <div className="flex">
                <ImageContainer response={jcResponse} src={jc} />
                <ImageContainer response={bjResponse} src={bj} />>
              </div>
            </div>
          </div>
        </RightContainer>
      </div>
    </Layout>
  );
  {
    /* <script
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
      /> */
  }
  // );
};

export default IndexPage;
