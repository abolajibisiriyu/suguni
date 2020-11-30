import styled from "styled-components";

import colors from "./utils/colors";

const Button = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  color: ${colors.SATURATED_SKY};
  background-color: ${colors.ANTI_FLASH_WHITE};
  text-transform: uppercase;
  font-weight: 900;
  font-size: 0.8rem;
  padding: 5px;
`;

export default Button;
