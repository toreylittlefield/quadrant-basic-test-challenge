import React from "react";
import styled from "styled-components";
import { GlobeIconSVG, GridButtonIconSVG, LibraryIconSVG } from "assets/icons";
import useWindowSize from "utils/useWindowSize";
import useHideComponent from "utils/useHideComponent";
import { v4 as uuidv4 } from "uuid";
import GridItemNav from "./GridItemNav";
import ExpandableSubNav from "./ExpandableSubNav";
import LinkNav from "./LinkNav";

const SideNav = styled.nav`
  grid-row: 1 / span all;
  grid-column: 1 / span 8;
  max-width: 250px;
  @media (min-width: 768px) {
    grid-column: 1 / span 4;
  }
  // desktop
  @media (min-width: 1024px) {
    grid-column: 1 / span 2;

    // gutters needed?
    /* padding-left: 55px; */
    /* padding-right: 55px; */
  }
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

const MainNav = () => {
  const {
    navRowsArray,
    windowSize: { width },
  } = useWindowSize();
  const [hideComponent, handleHideComponent] = useHideComponent(true);
  return (
    <SideNav>
      {/* Always present sidebar nav */}
      <MainSideNav width={width} onClick={handleHideComponent}>
        <GridItemNav key={uuidv4()} />
        <GridItemNav key={uuidv4()}>
          <LinkNav href="/#Home">
            <GlobeIconSVG />
          </LinkNav>
        </GridItemNav>
        <GridItemNav key={uuidv4()}>
          <LinkNav href="/#Options">
            <GridButtonIconSVG />
          </LinkNav>
        </GridItemNav>
        <GridItemNav key={uuidv4()}>
          <LinkNav href="/#Library">
            <LibraryIconSVG />
          </LinkNav>
        </GridItemNav>
        {/* create empty rows with borders */}
        {navRowsArray.map(() => (
          <GridItemNav key={uuidv4()} />
        ))}
      </MainSideNav>
      {/* Expandable Sub Nav */}
      <ExpandableSubNav hideComponent={hideComponent} />
    </SideNav>
  );
};

export default MainNav;
export { GridItemNav };
