import React from "react";
import { Flex } from "rebass";
import { Button } from "./button";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module)
  .add(
    "Button component",
    withInfo({
      inline: true,
      text: "Use the <Button /> component to render a primitive button."
    })(() => <Button>Button</Button>)
  )
  .add("Colors", () => (
    <Flex wrap>
      <Button bg="primary.2" color="primary.8" mr={2}>
        Button
      </Button>
      <Button bg="accent.2" color="accent.8" mr={2}>
        Accent
      </Button>
      <Button bg="supp.green" mr={2}>
        Success
      </Button>
      <Button bg="primary.9" color="primary.1" mr={2}>
        Blue
      </Button>
    </Flex>
  ))
  .add("Font size", () => (
    <Flex align="baseline" wrap>
      <Button mr={2} fontSize={1}>
        Size 1
      </Button>
      <Button mr={2} fontSize={2}>
        Size 2
      </Button>
      <Button mr={2} fontSize={3}>
        Size 3
      </Button>
      <Button mr={2} fontSize={4}>
        Size 4
      </Button>
    </Flex>
  ))
  .add("Width", () => <Button width={1}>Full Width</Button>)
  .add("Disabled", () => <Button disabled>Disabled</Button>)
  .add("Scale", () => <Button scale>Scale</Button>)
  .add("Chevrons", () => (
    <Flex wrap>
      <Button mr={3} chevronLeft>
        Back
      </Button>
      <Button chevronRight>Forward</Button>
    </Flex>
  ));
