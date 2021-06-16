import styled from "styled-components";

const Grid = styled.div`
  min-height: 900px;
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  /* grid-template-rows: repeat(12, [row] 50px); */
  /* grid-template-rows: repeat(12, [row] 1fr); */
  grid-template-rows: 80px;
  column-gap: 20px;
  // tablet
  @media (max-width: 768px) {
    /* column-count: 6; */
  }
  // desktop
  @media (max-width: 451px) {
    /* column-count: 1; */
  }
`;

export default Grid;
