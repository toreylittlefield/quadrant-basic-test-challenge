import styled from "styled-components";

const Grid = styled.div`
  min-height: 900px;
  display: grid;
  max-width: 1440px;
  grid-template-rows: 80px;
  column-gap: 20px;
  grid-template-columns: 0.4fr 1fr 1fr;

  // desktop
  @media (max-width: 1024px) {
    grid-template-columns: 0.7fr 1fr 1fr;

    // gutters needed?
    /* padding-left: 55px; */
    /* padding-right: 55px; */
  }
  // tablet
  @media (max-width: 768px) {
    grid-template-columns: 0.7fr 1fr 1fr;
  }
  // mobile
  @media (max-width: 451px) {
    grid-template-columns: 0.3fr 1fr;
  }
`;

export default Grid;
