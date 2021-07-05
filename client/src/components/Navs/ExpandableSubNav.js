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

// eslint-disable-next-line arrow-body-style
const ExpandableSubNav = ({ hideComponent }) => {
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
      <GridItemNav DividerAlt key={uuidv4()}>
        <LinkNav Dark>
          {!hideComponent && <TextSpan>Workflows </TextSpan>}
        </LinkNav>
      </GridItemNav>
      <GridItemNav DividerAlt key={uuidv4()}>
        <LinkNav Dark>
          {!hideComponent && <TextSpan>Timeline</TextSpan>}
        </LinkNav>
      </GridItemNav>
      <GridItemNav DividerAlt key={uuidv4()}>
        <LinkNav Dark>{!hideComponent && <TextSpan>Options</TextSpan>}</LinkNav>
      </GridItemNav>
      <GridItemNav DividerAlt key={uuidv4()}>
        <LinkNav Dark>{!hideComponent && <TextSpan>Designs</TextSpan>}</LinkNav>
      </GridItemNav>
      <GridItemNav DividerAlt key={uuidv4()}>
        <LinkNav Dark>{!hideComponent && <TextSpan>Packs</TextSpan>}</LinkNav>
      </GridItemNav>
      <GridItemNav DividerAlt key={uuidv4()}>
        <LinkNav Dark>{!hideComponent && <TextSpan>Tracker</TextSpan>}</LinkNav>
      </GridItemNav>
    </SubNav>
  );
};

ExpandableSubNav.propTypes = {
  hideComponent: PropTypes.bool,
};

ExpandableSubNav.defaultProps = {
  hideComponent: PropTypes.bool,
};

export default ExpandableSubNav;
