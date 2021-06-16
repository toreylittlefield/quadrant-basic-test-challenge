import React from "react";
import { Theme } from "ui/Theme";

import {
  Grid,
  TopNav,
  MainNav,
  SubNav,
  MainImage,
  Container,
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
      <Container>
        <MainImage />
        <SubNav bgColorLight>
          Sub Nav
          <ul>
            <li>Classification</li>
            <li>Commercial</li>
            <li>Notes</li>
            <li>Links</li>
          </ul>
        </SubNav>
      </Container>
    </Grid>
  </Theme>
);

export default MainPage;
