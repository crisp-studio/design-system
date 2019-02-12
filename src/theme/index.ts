import palx from "palx";

// Colors
const brandPrimary = "#4098D7";
export const palette = palx(brandPrimary);

console.log(palette);

export const primary = {
  0: palette.blue[0],
  1: palette.blue[1],
  2: palette.blue[2],
  3: palette.blue[3],
  4: palette.blue[4],
  5: palette.blue[5],
  6: palette.blue[6],
  7: palette.blue[7],
  8: palette.blue[8],
  9: palette.blue[9]
};

export const accent = {
  0: palette.teal[0],
  1: palette.teal[1],
  2: palette.teal[2],
  3: palette.teal[3],
  4: palette.teal[4],
  5: palette.teal[5],
  6: palette.teal[6],
  7: palette.teal[7],
  8: palette.teal[8],
  9: palette.teal[9]
};

export const neutral = {
  0: palette.gray[0],
  1: palette.gray[1],
  2: palette.gray[2],
  3: palette.gray[3],
  4: palette.gray[4],
  5: palette.gray[5],
  6: palette.gray[6],
  7: palette.gray[7],
  8: palette.gray[8],
  9: palette.gray[9]
};

export const supporting = {
  0: palette.gray[0],
  1: palette.gray[1],
  2: palette.gray[2],
  3: palette.gray[3],
  4: palette.gray[4],
  5: palette.gray[5],
  6: palette.gray[6],
  7: palette.gray[7],
  8: palette.gray[8],
  9: palette.gray[9]
};

export const colors = {
  primary: primary,
  accent: accent,
  neutral: neutral,
  supporting: supporting
};

// Sizes
export const space = [0, 6, 12, 18, 24, 36, 72, 108, 144, 288, 432];
export const fontSizes = [
  "0.75rem",
  "0.875rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "2.25rem",
  "3rem",
  "5rem",
  "6rem"
];
export const pill = "9999px";
export const radii = ["0px", "4px", "8px", "16px", pill];
export const radius = "4px";
export const breakpoints = [32, 48, 64, 80];

// Font
const emoji = '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
export const font = `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, ${emoji}`;
export const regular = "regular";
export const bold = "bold";
export const fontWeights = { regular, bold };

// Media queries
const createMediaQuery = (n: number) => `@media screen and (min-width: ${n}em)`;

const addAliases = (arr: Array<string | number>, aliases: Array<string>) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

const aliases = ["sm", "md", "lg", "xl"];

export const mediaQueries = {
  ...breakpoints.map(createMediaQuery),
  reduceMotion: "@media (prefers-reduced-motion: reduce)",
  reduceTransparency: "@media (prefers-reduced-transparency: reduce)"
};

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

// Shadows

export const shadowColor = "rgba(0,0,0,0.125)";
export const baseShadow = "0 0 2px 0 rgba(0,0,0,.0625),";
export const boxShadows = [
  baseShadow + `0 2px 4px 0 ${shadowColor}`,
  baseShadow + `0 4px 8px 0 ${shadowColor}`,
  baseShadow + `0 12px 12px 0 ${shadowColor}`,
  baseShadow + `0 24px 24px 0 ${shadowColor}`
];

// Motion
export const transition = `${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1)`;
export const scaleFactor = 17 / 16;

// Exports
export const theme = {
  breakpoints,
  mediaQueries,
  space,
  scaleFactor,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
  radii,
  radius,
  pill,
  transition,
  boxShadows,
  shadowColor
};

export default theme;
