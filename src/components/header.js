import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <H1>
        Compare the <span className="font-bold">real</span> <br /> facts
      </H1>
    </div>
  </header>
);

const H1 = styled.h1.attrs({
  className: "mb-20 mt-8 text-5xl uppercase underline leading-snug"
})``;

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
