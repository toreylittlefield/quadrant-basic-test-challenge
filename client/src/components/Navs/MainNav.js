import React from "react";
import styled from "styled-components";
import { GlobeIconSVG, GridButtonIconSVG, LibraryIconSVG } from "assets/icons";
import useWindowSize from "utils/useWindowSize";
import { v4 as uuidv4 } from "uuid";

const SideNav = styled.nav`
  grid-row: 1 / span all;
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  margin-right: 10px;
`;

const MainSideNav = styled.nav`
  /* grid-column: 1 / 4; */
  /* grid-template-rows: repeat(18, [row-start-main-nav] 50px);*/
  grid-auto-columns: 50px;
  background-color: ${(props) => props.theme.bgColorDark};
  display: grid;
  grid-auto-rows: 50px;
`;

const GridItemNav = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.dividersColor};
  cursor: ${({ theme, children }) =>
    React.Children.count(children) === 1 ? theme.isLink.cursor : "auto"};
`;

const SubNav = styled.nav`
  background-color: ${(props) => props.theme.bgColorLight};
  /* grid-column: 4 / span all; */
  grid-column: 2 / span all;
  text-align: center;
`;

const MainNav = () => {
  const { navRowsArray } = useWindowSize();

  return (
    <SideNav>
      {/* Always present sidebar nav */}
      <MainSideNav>
        <GridItemNav key={uuidv4()} />
        <GridItemNav isLink key={uuidv4()}>
          <GlobeIconSVG />
        </GridItemNav>
        <GridItemNav isLink key={uuidv4()}>
          <GridButtonIconSVG />
        </GridItemNav>
        <GridItemNav isLink key={uuidv4()}>
          <LibraryIconSVG />
        </GridItemNav>
        {/* create empty rows with borders */}
        {navRowsArray.map(() => (
          <GridItemNav key={uuidv4()} />
        ))}
      </MainSideNav>
      {/* Expandable Sub Nav */}
      <SubNav>Expanded Nav</SubNav>
    </SideNav>
  );
};

export default MainNav;
