import styled from "styled-components";

const LinkNav = styled.a`
  cursor: pointer;
  text-decoration: none;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  &:hover {
    background-color: ${(props) =>
      props.Dark
        ? props.theme.bgColorLightHover
        : props.theme.bgColorDarkHover};
  }
  &:active {
    background-color: ${(props) =>
      props.Dark ? props.theme.bgColorLightActive : props.theme.bgColorLight};
    animation: ${(props) => props.theme.animateClick};
  }
  ${(props) => props.theme.clicked}
`;

export default LinkNav;
