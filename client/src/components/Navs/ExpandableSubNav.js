import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import GridItemNav from "./GridItemNav";
import LinkNav from "./LinkNav";

const SubNav = styled.nav`
  grid-column-start: 2 / span all;
  background-color: ${(props) => props.theme.bgColorLight};
  grid-auto-rows: 50px;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.75s;
  display: grid;
  ${(props) => (props.hideComponent ? `width: 0%` : `width: max(150px, 100%)`)};
`;

const TextSpan = styled.span`
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 500ms;
`;

const HeadList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 15px;
`;

const menuItems = [
  "Workflows",
  "Timeline",
  "Options",
  "Designs",
  "Packs",
  "Tracker",
];

const menuItemComponent = (hideComponent, menuItem, handleHideComponent) => (
  <GridItemNav
    DividerAlt
    key={uuidv4()}
    onClick={() => setTimeout(handleHideComponent, 250)}
  >
    <LinkNav Dark>{!hideComponent && <TextSpan>{menuItem}</TextSpan>}</LinkNav>
  </GridItemNav>
);

// eslint-disable-next-line arrow-body-style
const ExpandableSubNav = ({ hideComponent, handleHideComponent }) => {
  return (
    <SubNav hideComponent={hideComponent}>
      <GridItemNav DividerAlt key={uuidv4()}>
        <HeadList>
          {!hideComponent && (
            <h3>
              <TextSpan>Range</TextSpan>
            </h3>
          )}
        </HeadList>
      </GridItemNav>
      {/* Menu Items */}
      {menuItems.map((menuItem) =>
        menuItemComponent(hideComponent, menuItem, handleHideComponent)
      )}
    </SubNav>
  );
};

ExpandableSubNav.propTypes = {
  hideComponent: PropTypes.bool,
  handleHideComponent: PropTypes.func,
};

ExpandableSubNav.defaultProps = {
  hideComponent: false,
  handleHideComponent: () => true,
};

export default ExpandableSubNav;
