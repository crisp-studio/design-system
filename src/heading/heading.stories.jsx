import React from "react";
import { Heading } from "rebass";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const description =
  "A type of the <Text> component" +
  " using HTML h1-h6 element for setting section headings," +
  " supporting all <Text> props.";

storiesOf("Heading", module)
  .add(
    "Heading component",
    withInfo({
      inline: true,
      text: description
    })(() => <Heading m={3}>Heading component (renders h2)</Heading>)
  )
  .add("Using <Text> props", () => (
    <section>
      <Heading textAlign="left" fontWeight="900" fontSize={6} color="primary.5">
        Heading Left
      </Heading>
      <Heading
        textAlign="center"
        fontWeight="600"
        fontSize={5}
        color="supp.yellow"
      >
        Heading Center
      </Heading>
      <Heading textAlign="right" fontSize={4} color="supp.red">
        Heading Right
      </Heading>
    </section>
  ));
