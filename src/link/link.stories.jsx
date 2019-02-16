import React from "react";
import { Link } from "./link";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Link", module)
  .add(
    "Link component",
    withInfo({
      inline: true,
      text: "<Text> extension for links."
    })(() => <Link href="https://crisp.studio">Homepage</Link>)
  )
  .add("Open in same tab", () => (
    <Link href="https://crisp.studio" target="_self">
      Open the homepage in same tab
    </Link>
  ))
  .add("Color underline", () => (
    <Link href="https://crisp.studio" bold underline>
      I’m extra Crispy
    </Link>
  ))
  .add("Chevrons", () => (
    <Link href="https://crisp.studio" fontSize={3} hoverline bold chevronRight>
      Explore more
    </Link>
  ));
