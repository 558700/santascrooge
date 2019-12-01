import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <H1>{siteTitle}</H1>
    </div>
  </header>
);

const H1 = styled.h1.attrs({
  className: "text-xxl"
})``;

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
