import React from "react";

import {
  GlobeIconSVG,
  FileUploadSVG,
  LibraryIconSVG,
  GridButtonIconSVG,
} from "./assets/icons/index";

function App() {
  return (
    <div className="App">
      <GlobeIconSVG />
      <header style={{ color: "blue" }} className="App-header">
        Hello World!
      </header>
      <FileUploadSVG />
      <LibraryIconSVG />
      <GridButtonIconSVG />
    </div>
  );
}

export default App;
