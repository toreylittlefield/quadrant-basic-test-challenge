import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-auto-rows: 200px;
  column-gap: 20px;
  padding: 0 45px 0 45px;
`;

export default Grid;
