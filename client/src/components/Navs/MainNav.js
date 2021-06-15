import styled from "styled-components";
import React from "react";

const SideNav = styled.nav`
  grid-row: 1;
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
`;

const MainSideNav = styled.nav`
  grid-column: 1 / 4;
  background-color: blanchedalmond;
  text-align: center;
`;

const SubNav = styled.nav`
  background-color: green;
  grid-column: 4 / span all;
  text-align: center;
`;

const MainNav = () => (
  <SideNav>
    <MainSideNav>SideNav - MainNav</MainSideNav>
    <SubNav>Expanded Nav</SubNav>
  </SideNav>
);

export default MainNav;
