import styled from "styled-components";

/**
 * Component for the top navigation as per Figma specs
 */
const TopNav = styled.nav`
  grid-row: 1;
  padding-bottom: 10px;
  grid-column: 6 / span all;
  // tablet
  @media (min-width: 769px) {
    grid-column: 4 / span all;
  }
  // desktop
  @media (min-width: 1025px) {
    grid-column: 3 / span all;
  }
  text-align: left;
  align-self: center;
  box-shadow: 0px 1px 1px rgba(137, 137, 137, 0.2);
`;

export default TopNav;
