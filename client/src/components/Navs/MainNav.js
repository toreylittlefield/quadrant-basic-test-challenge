import styled from "styled-components";
import React from "react";

const SideNav = styled.nav`
  background-color: green;
  grid-row: 1 / span all;
  grid-column: 1 / span 1;
  text-align: center;
  z-index: 1;
  overflow: hidden;
  height: 100%;
`;

const SubNav = styled.nav`
  background-color: blanchedalmond;
  text-align: center;
  width: 75%;
  margin-left: 25%;
  height: 100%;
`;

const MainNav = () => (
  <SideNav>
    SideNav - MainNav
    <SubNav>Expanded Nav</SubNav>
  </SideNav>
);

export default MainNav;
