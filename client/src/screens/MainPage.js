import React from "react";

import {
  GlobeIconSVG,
  FileUploadSVG,
  LibraryIconSVG,
  GridButtonIconSVG,
} from "assets/icons";

import CroppedBootCutJeans from "assets/images/Cropped Boot Cut Jeans 1 1.png";

const MainPage = () => (
  <div>
    <GlobeIconSVG />
    <FileUploadSVG />
    <LibraryIconSVG />
    <GridButtonIconSVG />
    <img alt="Cropped Boot Cut Jeans" src={CroppedBootCutJeans} />
  </div>
);

export default MainPage;
