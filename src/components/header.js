import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <H1>
        Compare the <span className="font-bold">real</span> facts
      </H1>
    </div>
  </header>
);

const H1 = styled.h1.attrs({
  className:
    "mb-10 mobile:w-full w-1/2 mobile:px-8 px-12 pt-6 mobile:text-4xl text-5xl uppercase underline leading-snug"
})``;

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
