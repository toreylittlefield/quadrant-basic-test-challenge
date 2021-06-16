import React from "react";
import styled from "styled-components";
import MainImageSource from "assets/images/Cropped Boot Cut Jeans 1 1.png";

const MainImageStyle = styled.img`
  max-height: 475px;
  margin-bottom: 25px;
  margin-right: 25px;
  /* grid-column: 6; */
  // tablet
  /* @media (min-width: 768px) {
    grid-column: 4;
  }
  // desktop
  @media (min-width: 1024px) {
    grid-column: 3;
  } */
`;

const MainImage = () => <MainImageStyle src={`${MainImageSource}`} />;

export default MainImage;
