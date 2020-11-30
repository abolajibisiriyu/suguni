import styled, { css } from "styled-components";

import colors from "app/styles/utils/colors";

interface ButtonProps {
  variant?: string;
}
const Button = styled.button<ButtonProps>`
  font-family: inherit;
  color: ${colors.WHITE};
  border: none;
  text-decoration: none;
  outline: none;
  background-color: ${colors.SATURATED_SKY};
  border-radius: 3px;
  height: 60px;
  padding: 0px 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & > span {
    margin-right: 11px;
    white-space: nowrap;
    color: ${colors.WHITE};
  }
  ${(props) => {
    switch (props.variant) {
      case "black":
        return css`
          background-color: ${colors.BLACK};
        `;
      case "blue":
        return css`
          background-color: ${colors.SATURATED_SKY};
        `;
      case "outline":
        return css`
          background-color: transparent;
          border: 2px solid ${colors.BLACK};
          color: ${colors.BLACK};
        `;
    }
  }};
`;

export default Button;
