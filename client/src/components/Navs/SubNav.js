import React, { useState } from "react";
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

const TabItem = styled.button`
  height: 48px;
  list-style-type: none;
  width: 100%;
  background-color: ${(props) => props.theme.bgColorLight};
  place-content: baseline;
  border: 0;
  padding: 0;
  margin: 0;
  ${(props) => (props.activeButton ? props.theme.isActive : "")}

  @media (max-width: 1024px) {
    min-width: 35%;
    width: calc(max(49%, 150px));
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
    width: 49%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const buttonItems = ["Classification", "Commercial", "Notes", "Links"];

const SubNav = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <SubNavStyles>
      {buttonItems.map((buttonItem, idx) => (
        <TabItem
          onClick={() => setActiveButton(idx)}
          activeButton={activeButton === idx}
        >
          <LinkNav Dark href={`#${buttonItem}`}>
            <span>{buttonItem}</span>
          </LinkNav>
        </TabItem>
      ))}
    </SubNavStyles>
  );
};

export default SubNav;
