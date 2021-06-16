import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {
  bgColorDark: "#333333",
  bgColorDarkHover: "#4D4D4D",
  bgColorLight: "#E6E6E6",
  bgColorLightHover: "#CDCDCD",
  bgColorLightActive: "#676767",
  dividersColor: "#C6C6C6",
  dividersColorAlt: "#f6d3de",
  animateClick: `clicked 400ms linear`,
  clicked: `@keyframes clicked {
    to {
      transform: scale(1);
      opacity: 0;
    }`,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

Theme.defaultProps = {
  children: PropTypes.node,
};

export { Theme, theme };
