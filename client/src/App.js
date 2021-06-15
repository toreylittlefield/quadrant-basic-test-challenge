import React from "react";
// import { ThemeProvider } from "styled-components";
import GlobalStyles from "ui/globalstyles";
import MainPage from "screens/MainPage";

const App = () => (
  <main className="App">
    <GlobalStyles />
    <MainPage />
  </main>
);

export default App;
