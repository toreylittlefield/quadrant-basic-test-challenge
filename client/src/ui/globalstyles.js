import { createGlobalStyle } from "styled-components";
import responsive from "utils/responsive";

export const Global = createGlobalStyle`
    // css browser reset
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      // mobile
      font-size: ${responsive(24)};

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

export default Global;
