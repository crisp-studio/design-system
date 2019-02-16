import palx from "palx";
import { getColorName } from "../util/color";
import { fontWeight, lineHeight } from "styled-system";

const primary = "#2C4CE8";
const primaryName = getColorName(primary);
const accent = "#FFC700";
const accentName = getColorName(accent);
const palette = palx(primary);

const shadowColor = "rgba(0,0,0,0.125)";
const baseShadow = "0 0 2px 0 rgba(0,0,0,.0625),";

console.log("TCL: palette[accentName]", palette[accentName]);

export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [
    ".875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2.25rem",
    "3rem",
    "5rem",
    "6rem"
  ],
  colors: {
    primary: palette[primaryName],
    accent: palette[accentName],
    neutral: palette["gray"],
    supp: {
      yellow: palette.yellow[5],
      red: palette.red[5],
      green: palette.green[5],
      black: palette.black
    }
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "Inter, sans-serif",
    mono: "Menlo, monospace"
  },
  shadows: {
    s: baseShadow + `0 2px 4px 0 ${shadowColor}`,
    m: baseShadow + `0 4px 8px 0 ${shadowColor}`,
    l: baseShadow + `0 12px 12px 0 ${shadowColor}`,
    xl: baseShadow + `0 24px 24px 0 ${shadowColor}`
  },
  fontWeights: {
    regular: "normal",
    bold: "bold"
  },
  lineHeights: [1, 1.25, 1.5],
  letterSpacing: ["-0.5em", ".1em", "0.25em"],
  borders: {
    bw1: "4px dotted blue"
  },
  radii: [0, ".125rem", ".25rem", "0.5rem", "1rem", "9999px"],
  opactiy: {
    "o-0": ".0",
    "o-025": ".025",
    "o-05": ".05",
    "o-10": "0.1",
    "o-20": "0.2",
    "o-30": "0.3",
    "o-40": "0.4",
    "o-50": "0.5",
    "o-60": "0.6",
    "o-70": "0.7",
    "o-80": "0.8",
    "o-90": "0.9",
    "o-1": "1"
  },
  scaleFactor: 17 / 16,
  transition: `${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1)`
};
