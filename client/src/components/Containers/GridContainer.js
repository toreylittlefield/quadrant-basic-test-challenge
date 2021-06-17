import styled from "styled-components";

const GridContainer = styled.div`
  grid-row: 2;
  grid-column: 2 / -1;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 0.33fr 0.77fr;
  grid-auto-rows: max-content;
  // desktop
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 0.9fr;
  }
  // tablet
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  // mobile
  @media (max-width: 451px) {
    grid-template-columns: 0.8fr;
  }
`;

export default GridContainer;
