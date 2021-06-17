import React from "react";
import { Theme } from "ui/Theme";

import {
  Grid,
  TopNav,
  MainNav,
  SubNav,
  MainImage,
  GridContainer,
  FlexContainer,
} from "components";

/**
 * This is the Main Page "Screen / View" with all parent components rendered here
 * @returns MainPage component
 */
const MainPage = () => (
  <Theme>
    <Grid>
      <TopNav>Option Attributes</TopNav>
      <MainNav bgColorDark bgColorDarkHover bgColorLight dividersColor>
        Main Nav
      </MainNav>
      <GridContainer>
        <MainImage />
        <FlexContainer>
          <SubNav bgColorLight />
        </FlexContainer>
      </GridContainer>
    </Grid>
  </Theme>
);

export default MainPage;
