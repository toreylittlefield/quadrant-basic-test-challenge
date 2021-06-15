import React from "react";
import styled from "styled-components";
import { GlobeIconSVG } from "assets/icons";

const SideNav = styled.nav`
  grid-row: 1 / span all;
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  margin-right: 10px;
`;

const MainSideNav = styled.nav`
  /* grid-column: 1 / 4; */
  grid-auto-columns: 50px;
  background-color: ${(props) => props.theme.bgColorDark};
  display: grid;
  grid-template-rows: repeat(18, [row-start-main-nav] 50px);
`;

const GridItemNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.dividersColor};
`;

const SubNav = styled.nav`
  background-color: ${(props) => props.theme.bgColorLight};
  grid-column: 4 / span all;
  text-align: center;
`;

// eslint-disable-next-line prefer-const
const arrayGridItems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const MainNav = () => (
  <SideNav>
    <MainSideNav>
      {arrayGridItems.map((_, idx) =>
        idx === 1 ? (
          <GridItemNav>
            <GlobeIconSVG />
          </GridItemNav>
        ) : (
          <GridItemNav />
        )
      )}
    </MainSideNav>
    <SubNav>Expanded Nav</SubNav>
  </SideNav>
);

export default MainNav;
