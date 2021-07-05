import React from "react";
import styled from "styled-components";
import MainImageSource from "assets/images/Cropped Boot Cut Jeans 1 1.webp";

const MainImageStyle = styled.img`
  max-height: 475px;
  max-width: 100%;
  margin-bottom: 25px;
`;

const MainImage = () => <MainImageStyle src={`${MainImageSource}`} />;

export default MainImage;
