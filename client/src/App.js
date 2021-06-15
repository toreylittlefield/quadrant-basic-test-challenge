import React from "react";
// import { ThemeProvider } from "styled-components";
import GlobalStyles from "ui/globalstyles";

import {
  GlobeIconSVG,
  FileUploadSVG,
  LibraryIconSVG,
  GridButtonIconSVG,
} from "assets/icons";

import CroppedBootCutJeans from "assets/images/Cropped Boot Cut Jeans 1 1.png";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <GlobeIconSVG />
      <header className="App-header">Hello World!</header>
      <FileUploadSVG />
      <LibraryIconSVG />
      <GridButtonIconSVG />
      <img alt="Cropped Boot Cut Jeans" src={CroppedBootCutJeans} />
    </div>
  );
}

export default App;
