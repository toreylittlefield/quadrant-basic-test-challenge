import React from "react";
import { Theme } from "ui/Theme";

import { Grid, TopNav, MainNav, SubNav } from "components";

const MainPage = () => (
  <Theme>
    <Grid>
      <TopNav>Option Attributes</TopNav>
      <MainNav bgColorDark bgColorDarkHover bgColorLight dividersColor>
        Main Nav
      </MainNav>
      <SubNav bgColorLight>Sub Nav</SubNav>
    </Grid>
  </Theme>
);

export default MainPage;
