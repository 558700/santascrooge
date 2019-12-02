import React from "react";
import styled from "styled-components";

import { theme } from "../../tailwind.config";
import tree from "../images/tree.gif";

const Heading = styled.p.attrs({
  className: "mb-1 text-3xl"
})``;

const Input = styled.div.attrs({
  className: "p-1 mb-8 text-2xl w-full border-black border-solid border-2"
})``;

const LeftContainer = styled.div.attrs({
  className: "uppercase w-1/2 pr-20"
})``;

const RightContainer = styled.div.attrs({
  className: "min-height-full flex flex-col justify-center pl-4"
})`
  position: absolute;
  right: 80px;
  top: 15%;
  width: calc((100vw - 160px) / 2);
`;

const Headline = styled.p.attrs({
  className: "leading-tight font-print font-bold text-5xl"
})`
  text-decoration: underline;
  text-decoration-color: ${theme.extend.colors["pink"]};
`;

const SubHeadline = styled.p.attrs({
  className: "font-print text-xl"
})``;

const Image = styled.img.attrs({
  className: "border-black border-solid border-2"
})`
  margin-bottom: 1px;
  object-fit: cover;
  width: 100%;
  height: 350px;
`;

const Response = styled.div.attrs({
  className: "bg-darkblue p-2 border-black border-solid border-2 w-100"
})`
  min-height: 5rem;
  height: fit-content;
`;

const ImageContainer = ({ response, src }) => (
  <div className="w-1/2 m-2">
    <Image src={src} className="b--black w-100 h-3/4" />
    <Response>
      <span className="p-px font-sans black uppercase bg-white">
        {response}
      </span>
    </Response>
  </div>
);

const DownloadButton = styled.button.attrs({
  className: "rounded-sm font-bold mt-2 bg-grey p-3 lowercase mr-8"
})``;

const UpgradeButton = styled.button.attrs({
  className: "rounded-sm font-bold mt-2 p-3 pr-10 text-white inline lowercase"
})`
  background-color: black;
  background-image: url(${tree});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 80px;
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
  UpgradeButton
};
