import React from "react";
import styled from "styled-components";
import LinkNav from "./LinkNav";

const SubNavStyles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  place-content: center;
  align-self: flex-start;
  margin-right: 35px;
  // desktop
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    width: 100%;
  }
  // tablet
  @media (max-width: 768px) {
    width: 100%;
    place-content: baseline;
    margin-right: 55px;
  }
  // mobile
  @media (max-width: 451px) {
    place-content: center;
    margin-right: 0;
  }
`;

const TabItem = styled.li`
  height: 48px;
  list-style-type: none;
  width: 100%;
  border: 0.1px solid rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.bgColorLight};
  place-content: baseline;

  @media (max-width: 1024px) {
    min-width: 35%;
    width: calc(max(49%, 150px));
  }
  @media (max-width: 768px) {
    width: 49%;
  }
  @media (max-width: 451px) {
    width: 100%;
  }
`;

const SubNav = () => (
  <SubNavStyles>
    <TabItem>
      <LinkNav Dark href="#Classification">
        <span>Classification</span>
      </LinkNav>
    </TabItem>
    <TabItem>
      <LinkNav Dark href="#Commercial">
        <span>Commercial</span>
      </LinkNav>
    </TabItem>
    <TabItem>
      <LinkNav Dark href="#Notes">
        <span>Notes</span>
      </LinkNav>
    </TabItem>
    <TabItem>
      <LinkNav Dark href="#Links">
        <span>Links</span>
      </LinkNav>
    </TabItem>
  </SubNavStyles>
);

export default SubNav;
