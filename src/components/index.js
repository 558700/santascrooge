import React from "react";
import styled from "styled-components";

import { theme } from "../../tailwind.config";
import tree from "../images/tree.gif";

const Heading = styled.span.attrs({
  className: "bg-white mb-1 p-1 mobile:text-2xl text-3xl"
})``;

const Input = styled.div.attrs({
  className:
    "p-1 bg-white mobile:text-xl mb-8 text-2xl w-full border-black border-solid border-2"
})``;

const LeftContainer = styled.div.attrs({
  className: "uppercase mobile:w-full w-1/2 mobile:pr-0 pr-20"
})``;

const RightContainer = styled.div.attrs({
  className:
    "mobile:my-8 mobile:min-h-3/4 min-height-full flex flex-col justify-center mobile:pl-0 pl-4"
})`
  position: absolute;
  right: 80px;
  top: 15%;
  width: calc((100vw - 160px) / 2);

  @media only screen and (max-width: 700px) {
    position: relative;
    right: auto;
    width: 100%;
    bottom: auto;
    height: fit-content;
  }
`;

const Headline = styled.p.attrs({
  className: "leading-tight font-print font-bold mobile:text-4xl text-5xl"
})`
  text-decoration: underline;
  text-decoration-color: ${theme.extend.colors["pink"]};
`;

const SubHeadline = styled.p.attrs({
  className: "font-print mobile:text-lg text-xl"
})``;

const Image = styled.img.attrs({
  className: "border-black border-solid border-2"
})`
  margin-bottom: 1px;
  object-fit: cover;
  width: 100%;
  height: 350px;

  @media only screen and (max-width: 700px) {
    height: 200px;
  }
`;

const Mark = styled.img.attrs({
})`
  height: 100px;

  @media only screen and (max-width: 700px) {
    height: 50px;
  }
`;

const Response = styled.div.attrs({
  className:
    "bg-darkblue mobile:p-1 p-2 border-black border-solid border-2 w-100"
})`
  min-height: 5rem;
  height: fit-content;
`;

const ImageContainer = ({ response, src }) => (
  <div className="w-1/2 mobile:m-px m-2">
    <Image src={src} className="b--black w-100 h-3/4" />
    <Response>
      <span className="mobile:text-sm p-px font-sans black uppercase">
        {response}
      </span>
    </Response>
  </div>
);

const BrandContainer = ({ src }) => (
  <div className="w-1/2 mobile:m-px m-2"><a href="https://peoplesmomentum.com"><Mark src={src} />Made by Momentum</a></div>
);


const DownloadButton = styled.button.attrs({
  className: "mobile:w-1/2 rounded-sm font-bold mt-2 bg-grey p-3 lowercase mr-8"
})``;

const UpgradeButton = styled.button.attrs({
  className:
    "mobile:w-1/2 rounded-sm font-bold mt-2 p-3 pr-10 text-white inline lowercase"
})`
  background-color: black;
  background-image: url(${tree});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 92%;
`;

export {
  Heading,
  Input,
  LeftContainer,
  RightContainer,
  ImageContainer,
  Headline,
  SubHeadline,
  DownloadButton,
  UpgradeButton,
  BrandContainer
};
