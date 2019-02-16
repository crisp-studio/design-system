import React from "react";
import { Text } from "rebass";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Text", module)
  .add(
    "Typography component",
    withInfo({
      inline: true,
      text:
        "A low-level component for setting font-size, typographic styles, margin, and color"
    })(() => <Text m={3}>Hello</Text>)
  )
  .add("fontSize", () => (
    <div>
      <Text fontSize={7}>Hello 7</Text>
      <Text fontSize={6}>Hello 6</Text>
      <Text fontSize={5}>Hello 5</Text>
      <Text fontSize={4}>Hello 4</Text>
      <Text fontSize={3}>Hello 3</Text>
      <Text fontSize={2}>Hello 2</Text>
      <Text fontSize={1}>Hello 1</Text>
      <Text fontSize={0}>Hello 0</Text>
    </div>
  ))
  .add("align", () => (
    <div>
      <Text textAlign="left">Hello Left</Text>
      <Text textAlign="center">Hello Center</Text>
      <Text textAlign="right">Hello Right</Text>
    </div>
  ))
  .add("bold", () => <Text fontWeight="900">Hello Bold</Text>)
  .add("spacing", () => (
    <div>
      <Text mt={4} mb={2}>
        Hello Margin
      </Text>
      <Text p={3}>Hello Padding</Text>
    </div>
  ))
  .add("color", () => (
    <div>
      <Text color="primary.6">Hello Primary</Text>
      <Text color="accent.5">Hello Accent</Text>
      <Text color="supp.red">Hello Error</Text>
    </div>
  ));
