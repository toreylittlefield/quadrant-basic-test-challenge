import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {
  bgColorDark: "#333333",
  bgColorLight: "#E6E6E6",
  dividersColor: "#C6C6C6",
  isLink: {
    cursor: "pointer",
    "text-decoration": "none",
  },
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
