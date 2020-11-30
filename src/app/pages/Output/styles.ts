import styled from "styled-components";

import colors from "app/styles/utils/colors";

export const OutputContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0px 20px;
  }
`;

export const OutBody = styled.div`
  height: calc(100vh - 40px);
`;
