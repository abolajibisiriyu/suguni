import styled from "styled-components";

import colors from "app/styles/utils/colors";
import media from "app/styles/utils/media";

export const BasicContainer = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${colors.SATURATED_SKY};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0px 20px;

  & > h1,
  & > p {
    text-align: center;
  }

  & > h1 {
    color: ${colors.WHITE};
    max-width: 950px;
    width: 100%;
    font-weight: 900;
  }

  & > p {
    color: ${colors.TWINKLE_BLUE};
    margin: 20px 0 40px;
    max-width: 950px;
    width: 100%;
  }

  ${media.mobile`
    height: auto;
    padding: 20px;
  `};
`;

export const TimerBox = styled.div`
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.WHITE};

  padding: 40px 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .section {
    flex-basis: 150px;

    text-align: center;
    h3 {
      color: ${colors.PRESTIGE_BLUE};
      margin-bottom: 10px;
    }
    p {
      color: ${colors.GRISAILLE};
    }
  }
`;
