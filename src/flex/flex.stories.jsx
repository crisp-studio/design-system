import React from "react";
import { Flex, Box } from "rebass";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Flex", module)
  .add("Basic", () => (
    <Flex align="center">
      <Box width={1 / 2} p={3} color="white" bg="neutral.5">
        Flex
      </Box>
      <Box width={1 / 2} p={1} color="white" bg="supp.green">
        Box
      </Box>
    </Flex>
  ))
  .add("Wrap", () => (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} p={3} color="white" bg="neutral.5">
        Flex
      </Box>
      <Box width={[1, 1 / 2]} p={3} color="white" bg="supp.green">
        Wrap
      </Box>
      <Box width={[1, 1 / 2]} p={3} color="white" bg="neutral.6">
        Wrap
      </Box>
    </Flex>
  ))
  .add("Justify", () => (
    <Flex justifyContent="space-around">
      <Box width={1 / 3} p={2} color="white" bg="neutral.5">
        Flex
      </Box>
      <Box width={1 / 3} p={2} color="white" bg="supp.green">
        Justify
      </Box>
    </Flex>
  ))
  .add("Direction", () => (
    <Flex flexDirection="column">
      <Box width={1 / 3} p={2} color="white" bg="neutral.5">
        Flex
      </Box>
      <Box width={1 / 3} p={2} color="white" bg="supp.green">
        Direction
      </Box>
    </Flex>
  ));
