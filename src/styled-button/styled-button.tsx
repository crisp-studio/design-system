import * as React from "react";
import styled from "styled-components";
import theme from "../theme";
import { space, width, color, fontSize, textAlign } from "styled-system";

export interface Props {
  /** Button content  */
  children: React.ReactNode;
  /** Callback to handle the click event  */
  onClick: () => void;
  /**
   * Disables onClick
   *
   * @default false
   **/
  disabled?: boolean;
}

const noop = () => {};

const RootStyledButton = styled.button`
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  border-radius: ${theme.radii[2]};
  background-color: ${theme.colors.primary[7]};
  border: none;
  outline: none;
`;

const ButtonSpan = styled.span`
  margin: auto;
  font-size: ${theme.fontSizes[2]};
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.primary[0]};
  text-transform: uppercase;
`;

export const StyledButton: React.SFC<Props> = (props: Props): any => {
  const { children, onClick, disabled = false } = props;

  return (
    <RootStyledButton disabled={disabled} onClick={!disabled ? onClick : noop}>
      <ButtonSpan>{children}</ButtonSpan>
    </RootStyledButton>
  );
};
