import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import theme from "../theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
