import React from "react";
import { Card } from "./card";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Card", module)
  .add(
    "Card component",
    withInfo({
      inline: true,
      text: "Box extension to control box-shadow."
    })(() => (
      <div>
        <Card boxShadow="s" my={4} p={3} width={256}>
          Small Shadow
        </Card>
        <Card boxShadow="m" my={4} p={3} width={256}>
          Medium Shadow
        </Card>
        <Card boxShadow="l" my={4} p={3} width={256}>
          Large Shadow
        </Card>
        <Card boxShadow="xl" my={4} p={3} width={256}>
          XLarge Shadow
        </Card>
      </div>
    ))
  )
  .add("Box Shadows with custom borders", () => (
    <div>
      <Card
        boxShadowe="s"
        my={4}
        p={3}
        width={256}
        border="2px dotted"
        borderColor="primary.5"
      >
        Small Shadow
      </Card>
      <Card
        boxShadowe="s"
        my={4}
        p={3}
        width={256}
        border="2px solid"
        borderColor="accent.4"
      >
        Small Shadow
      </Card>
    </div>
  ));
