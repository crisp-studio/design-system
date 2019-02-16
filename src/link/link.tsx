import React from "react";
import styled, { css } from "../util/styled-components";
import { Link as Base } from "rebass";
import theme from "../theme";

interface LinkProps {
  underline?: boolean;
  hoverline?: boolean;
  chevronLeft?: boolean;
  chevronRight?: boolean;
}

export const Link = styled(Base)<LinkProps>`
  text-decoration: ${p => (p.underline ? "underline" : "none")};

  ${p =>
    p.hoverline &&
    css`
      &:focus,
      &:hover {
        text-decoration: underline;
      }
    `};
  &:before,
  &:after {
    text-decoration: none !important;
    display: inline-block;
  }
  ${p =>
    p.chevronLeft &&
    css`
      &:before {
        content: "‹";
        padding-right: 0.25em;
      }
    `};
  ${p =>
    p.chevronRight &&
    css`
      &:after {
        content: "›";
        padding-left: 0.25em;
      }
    `};
`;
