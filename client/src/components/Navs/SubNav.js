import styled from "styled-components";

const SubNav = styled.nav`
  background-color: ${(props) => props.theme.bgColorLight};
  grid-row: 2 / span 2;
  grid-column: 3 / all;
  text-align: center;
  margin-right: 50px;
`;

export default SubNav;
