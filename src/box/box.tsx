import styled from "styled-components";
import { space, width, color, textAlign } from "styled-system";
import theme from "../theme";

// ? How can I width, space and co as properties (So they can be adjusted?

interface BoxProps {
  theme: any;
}

export const Box: React.SFC<BoxProps> = styled.div`
  ${space}
  ${width}
  ${color}
  ${textAlign}
`;

Box.displayName = "Box";
