import React, { useState } from "react";
import styled from "styled-components";
import LinkNav from "./LinkNav";

const hideTransition = `
  visibility: hidden;
  opacity: 0;
  transform: translate(0px, 20px);
  max-width: 0;
  position: absolute;
  height: 0;
  transition: visibility 50ms ease 0s, opacity 0s;
`;

const showTransition = `
  visibility: visible;
  opacity: 1;
  transform: translate(0px, 0px);
  transition: all 350ms ease 0ms, opacity 150ms;
`;

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
    ${(props) =>
      props.activeButton || props.toggleClick ? showTransition : hideTransition}
  }
`;

const buttonItems = ["Classification", "Commercial", "Notes", "Links"];

const SubNav = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [toggleClick, setToggleClick] = useState(true);
  return (
    <SubNavStyles>
      {buttonItems.map((buttonItem, idx) => (
        <TabItem
          key={buttonItem}
          onClick={() => {
            setActiveButton(idx);
            setToggleClick(!toggleClick);
          }}
          activeButton={activeButton === idx}
          toggleClick={toggleClick}
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
