import { createGlobalStyle } from "styled-components";
import responsive from "utils/responsive";
import normalize from "./normalizecss";

const GlobalStyles = createGlobalStyle`
  // css browser reset
  ${normalize}
  :root {
      // mobile
      font-size: ${responsive(24)};

      // tablet
      @media (min-width: 768px) {
        font-size: ${responsive(18)};
      }

      // desktop
      @media (min-width: 1024px) {
      background-color: black;
        font-size: ${responsive(16)};
      }
    }
`;

export default GlobalStyles;
