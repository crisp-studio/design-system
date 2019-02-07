import { configure, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);
const req = require.context("../src", true, /.stories.jsx$/);

function loadStories() {
  require("./WelcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
