/* eslint-disable arrow-body-style */
import React from "react";

import {
  GlobeIconSVG,
  FileUploadSVG,
  LibraryIconSVG,
  GridButtonIconSVG,
} from "assets/icons";

import CroppedBootCutJeans from "assets/images/Cropped Boot Cut Jeans 1 1.png";

const MainPage = () => {
  return (
    <body>
      <GlobeIconSVG />
      <header className="App-header">Hello World!</header>
      <FileUploadSVG />
      <LibraryIconSVG />
      <GridButtonIconSVG />
      <img alt="Cropped Boot Cut Jeans" src={CroppedBootCutJeans} />
    </body>
  );
};

export default MainPage;
