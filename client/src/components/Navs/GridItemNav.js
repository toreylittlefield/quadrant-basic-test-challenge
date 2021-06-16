import styled from "styled-components";

const GridItemNav = styled.li`
  border-bottom: 1px solid
    ${(props) =>
      props.DividerAlt
        ? props.theme.dividersColorAlt
        : props.theme.dividersColor};
  display: flex;
  width: 100%;
  height: 100%;
`;

export default GridItemNav;
