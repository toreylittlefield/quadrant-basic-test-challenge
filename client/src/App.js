import React from "react";

import {
  GlobeIconSVG,
  FileUploadSVG,
  LibraryIconSVG,
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
    </div>
  );
}

export default App;
