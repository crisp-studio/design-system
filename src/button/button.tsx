import { Box } from "../box/box";
import theme from "../theme";
import styled, { css } from "styled-components";
import { space, width, color, fontSize, textAlign } from "styled-system";

// ? How can I add the default props to my styled component and access them there?

interface ButtonProps {
  inverted?: boolean;
  scale?: boolean;
  chevronLeft?: boolean;
  chevronRight?: boolean;
  disabled?: boolean;
}

export const Button: React.SFC = styled(Box)<ButtonProps>`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.125;
  appearance: none;
  cursor: pointer;
  transition: ${theme.transition} box-shadow;
  box-shadow: 0 2px 4px ${theme.shadowColor};
  border-radius: ${theme.pill};
  border: none;
  color: white;
  background-color: blue;

  ${p => p.inverted && `background-color: blue, color: white`}

  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0 2px 6px ${theme.shadowColor};
  }
  &:active {
    outline: 0;
    box-shadow: 0 2px 8px 2px ${theme.shadowColor};
  }
  ${p => p.disabled && { opacity: 0.25, cursor: "not-allowed" }};

  ${p =>
    p.scale &&
    css`
      transition: ${theme.transition} all;
      will-change: transform;
      transform: scale(1);
      &:hover,
      &:focus {
        transform: scale(${theme.scaleFactor});
      }
      ${theme.mediaQueries.reduceMotion} {
        transform: none;
      }
    `};
  ${p =>
    p.chevronLeft &&
    css`
      &:before {
        content: "«";
        padding-right: 0.25em;
      }
    `};
  ${p =>
    p.chevronRight &&
    css`
      &:after {
        content: "»";
        padding-left: 0.25em;
      }
    `};
`;

Button.defaultProps = {
  theme,
  fontSize: 3,
  m: 0,
  px: 3,
  py: 2
};

Button.displayName = "Button";
