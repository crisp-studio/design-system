import { configure } from "@storybook/react";

const req = require.context("../src", true, /.stories.jsx$/);

function loadStories() {
  require("./WelcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
