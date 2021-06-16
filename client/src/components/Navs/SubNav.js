import styled from "styled-components";

const SubNav = styled.nav`
  background-color: ${(props) => props.theme.bgColorLight};
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default SubNav;
