import styled from "styled-components";

const Container = styled.div`
  grid-row: 2;
  grid-column: 8;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  // tablet
  @media (min-width: 769px) {
    grid-column: 4 / span all;
    flex-direction: row;
  }
  // desktop
  @media (min-width: 1025px) {
    grid-column: 3 / span all;
    flex-direction: row;
  }
`;

export default Container;
