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
  CustomForm,
} from "components";

/**
 * This is the Main Page "Screen / View" with all parent components rendered here
 * @returns MainPage component
 */
const MainPage = () => (
  <Theme>
    <Grid>
      <TopNav>Option Attributes</TopNav>
      {/* The sidebar is MainNav */}
      <MainNav bgColorDark bgColorDarkHover bgColorLight dividersColor />
      {/* End sidebar  */}

      {/* Main */}
      <GridContainer>
        <MainImage />
        <FlexContainer>
          {/* Classification, Commerical... buttons */}
          <SubNav bgColorLight />
          <CustomForm />
        </FlexContainer>
      </GridContainer>
      {/* End Main */}
    </Grid>
  </Theme>
);

export default MainPage;
