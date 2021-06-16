import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useWindowSize from "utils/useWindowSize";
import useHideComponent from "utils/useHideComponent";
import { GlobeIconSVG, GridButtonIconSVG, LibraryIconSVG } from "assets/icons";
import GridItemNav from "./GridItemNav";
import ExpandableSubNav from "./ExpandableSubNav";
import LinkNav from "./LinkNav";

const SideNav = styled.nav`
  grid-row: 1 / span all;
  grid-column: 1 / span 8;
  max-width: 250px;
  // tablet
  @media (min-width: 768px) {
    grid-column: 1 / span 6;
  }
  // desktop
  @media (min-width: 1024px) {
    grid-column: 1 / span 2;
  }
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  margin-right: 10px;
`;

const MainSideNav = styled.nav`
  grid-auto-columns: 50px;
  background-color: ${(props) => props.theme.bgColorDark};
  display: grid;
  grid-auto-rows: 50px;
`;

/**
 * This is the Side Navigation Bar according to Figma Specs
 * @returns SideNav Component
 */
const MainNav = () => {
  const { navRowsArray } = useWindowSize();
  const [hideComponent, handleHideComponent] = useHideComponent(true);
  return (
    <SideNav>
      {/* Always present sidebar nav */}
      <MainSideNav onClick={handleHideComponent}>
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
