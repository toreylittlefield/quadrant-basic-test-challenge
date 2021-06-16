import styled from "styled-components";

const Grid = styled.div`
  min-height: 900px;
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-template-rows: repeat(12, [row] 50px);
  column-gap: 20px;
`;

export default Grid;
