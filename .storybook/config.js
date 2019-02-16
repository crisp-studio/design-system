import React from "react";
import { addDecorator, configure, setAddon } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme/index";
import { GlobalStyle } from "../src/theme/globalstyle";
import { Box } from "rebass";

addDecorator(renderStory => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Box p={3}>{renderStory()}</Box>
    </ThemeProvider>
  </>
));

addDecorator(
  withInfo({
    propTablesExclude: [ThemeProvider] // do not display propTable for HOC
  })
);
addDecorator(withKnobs);

const req = require.context("../src", true, /.stories.jsx$/);

function loadStories() {
  require("./welcome-story");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
