import React from "react";
import { Image, Box } from "rebass";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const text = "A low-level layout component that renders an image";
const props = {
  src: "http://placekitten.com/1440/1024",
  alt: "A cute kitten"
};

storiesOf("Image", module)
  .add(
    "Image component",
    withInfo({
      text,
      inline: true
    })(() => <Image {...props} />)
  )
  .add("Responsive width, with Box", () => (
    <Box width={1 / 2}>
      <Image {...props} />
    </Box>
  ));
