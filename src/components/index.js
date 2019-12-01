import React from "react";
import styled from "styled-components";

const Heading = styled.p.attrs({
  className: "text-3xl"
})``;

const Input = styled.div.attrs({
  className: "text-2xl w-full b--black"
})``;

const LeftContainer = styled.div.attrs({
  className: "uppercase w-1/2 pr-4"
})``;

const RightContainer = styled.div.attrs({
  className: "w-1/2 flex flex-col justify-center pl-4"
})``;

const Headline = styled.p.attrs({
  className: "font-print font-bold white text-6xl b--pink border-b-4"
})``;

const SubHeadline = styled.p.attrs({
  className: "font-print white text-2xl"
})``;

const Image = styled.img.attrs({
  className: ""
})``;

const ImageContainer = ({ response, src }) => (
  <div className="w-1/2 ma2">
    <Image src={src} className="b--black w-100" />
    <div className="bg-darkblue b--black w-100">
      <span className="font-sans black uppercasebg-white"></span>
      {response}
    </div>
  </div>
);

export {
  Heading,
  Input,
  LeftContainer,
  RightContainer,
  ImageContainer,
  Headline,
  SubHeadline
};
