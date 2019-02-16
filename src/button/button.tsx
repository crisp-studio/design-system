import React from "react";
import styled, { css } from "../util/styled-components";
import { Button as Base } from "rebass";
import { color } from "styled-system";

interface ButtonProps {
  scale?: boolean;
  disabled?: boolean;
  chevronRight?: boolean;
  chevronLeft?: boolean;
  inverted?: boolean;
}

export const Button = styled(Base)<ButtonProps>`
  cursor: pointer;
  border-radius: ${p => p.theme.radii[2]};
  -webkit-font-smoothing: antialiased;
  transition: ${p => p.theme.transition} box-shadow;
  box-shadow: ${p => p.theme.shadows.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  display: inline-block;

  ${props =>
    props.inverted && {
      backgroundColor: props.color,
      color: props.bg
    }};

  &:hover,
  &:focus {
    outline: 0;
    box-shadow: ${p => p.theme.shadows.m};
  }
  &:active {
    outline: 0;
    box-shadow: ${p => p.theme.shadows.m};
  }

  ${p => p.disabled && { opacity: 0.25, cursor: "not-allowed" }};

  ${p =>
    p.scale &&
    css`
      transition: all ${p.theme.transition};
      will-change: transform;
      transform: scale(1);
      &:hover,
      &:focus {
        transform: scale(${p.theme.scaleFactor});
      }
    `}

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
