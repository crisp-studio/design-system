import React from "react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";

import { StyledButton } from "./styled-button";

storiesOf("StyledButton", module).add("basic", () => (
  <StyledButton disabled={boolean("disabled", false)}>
    {text("text", "Hello World")}
  </StyledButton>
));
