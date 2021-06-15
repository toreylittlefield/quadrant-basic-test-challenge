import { createGlobalStyle } from "styled-components";
import responsive from "utils/responsive";
import normalize from "./normalizecss";
import Montserrat from "../assets/fonts/Montserrat/Montserrat-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  // css browser reset
  ${normalize}
  @font-face {
    font-family: 'Montserrat-Regular';
    src: url(${Montserrat}) format('truetype');
  }
  :root {
    // mobile
    font-size: ${responsive(24)};
    font-family: 'Montserrat-Regular';
    
      // tablet
      @media (min-width: 768px) {
        font-size: ${responsive(18)};
      }

      // desktop
      @media (min-width: 1024px) {
        font-size: ${responsive(16)};
      }
    }
`;

export default GlobalStyles;
