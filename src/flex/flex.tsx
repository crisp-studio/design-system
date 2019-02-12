import styled from "styled-components";
import {
  alignSelf,
  alignItems,
  justifyContent,
  flexDirection,
  flex
} from "styled-system";
import theme from "../theme";
import { Box } from "../box/box";

interface FlexProps {
  wrap?: any;
  align?: any;
}

/* 
TODO: Add this missing functionality
const wrap = (props: FlexProps) => (props.wrap ? { flexWrap: "wrap" } : null);
Inside export: ${wrap} 
*/

export const Flex: React.SFC = styled(Box)`
  display: flex;
  ${alignSelf}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flex};
`;

Flex.displayName = "Flex";
