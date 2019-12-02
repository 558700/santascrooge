import React, { useState, useEffect } from "react";
import download from "downloadjs";
import htmlToImage from "html-to-image";
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
  RightContainer,
  DownloadButton,
  UpgradeButton
} from "../components";

import jc from "../images/jc.jpg";
import bj from "../images/bj.jpg";

const IndexPage = () => {
  const [issue, setIssue] = useState("scone toppings");
  const [jcResponse, setJCResponse] = useState(
    "i make my own jam :) do u want some?"
  );
  const [bjResponse, setBJResponse] = useState("cream on first u peasant");

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onresize = function() {
        document.body.height = window.innerHeight;
      };
      window.onresize(); // called to initially set the height.    }
    }
  });

  const handleContentChange = e => {
    e.preventDefault();

    const contentType = e.currentTarget.id;
    const text = e.currentTarget.textContent;

    switch (contentType) {
      case "issue":
        return setIssue(text);
      case "jcResponse":
        return setJCResponse(text);
      case "bjResponse":
        return setBJResponse(text);
      default:
        return;
    }
  };

  const downloadImage = () => {
    htmlToImage
      .toPng(document.getElementById("imageToDownload"))
      .then(function(dataUrl) {
        download(dataUrl, "santa-scrooge.png");
      });
  };

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex min-h-screen">
        <LeftContainer>
          <Heading>Issue:</Heading>
          <Input
            id="issue"
            suppressContentEditableWarning={true}
            contentEditable="true"
            onBlur={e => handleContentChange(e)}
          >
            {issue}
          </Input>
          <Heading>Jeremy's comment:</Heading>
          <Input
            id="jcResponse"
            suppressContentEditableWarning={true}
            contentEditable="true"
            onBlur={e => handleContentChange(e)}
          >
            {jcResponse}
          </Input>
          <Heading>Boris' comment:</Heading>
          <Input
            id="bjResponse"
            suppressContentEditableWarning={true}
            contentEditable="true"
            onBlur={e => handleContentChange(e)}
          >
            {bjResponse}
          </Input>
          <DownloadButton onClick={downloadImage}>download</DownloadButton>
          <UpgradeButton>upgrade</UpgradeButton>
        </LeftContainer>
        <RightContainer>
          <div id="imageToDownload" className="bg-lightblue">
            <div className="bg-darkblue p-2 text-white">
              <Headline>Corbyn or Johnson?</Headline>
              <SubHeadline>
                Be informed. Compare them on the issues that matter.
              </SubHeadline>
            </div>
            <div className="p-2">
              <p className="mb-2 font-bold">
                Issue:{" "}
                {issue !== "" && (
                  <span className="ml-1 bg-white px-2 py-1 uppercase font-sans font-normal">
                    {issue}
                  </span>
                )}
              </p>
              <div className="flex">
                <ImageContainer response={jcResponse} src={jc} />
                <ImageContainer response={bjResponse} src={bj} />
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
