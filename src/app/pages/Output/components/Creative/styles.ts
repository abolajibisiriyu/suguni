import styled from "styled-components";

import colors from "app/styles/utils/colors";
import media from "app/styles/utils/media";

export const BasicContainer = styled.section`
  height: 100%;
  width: 100%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?cs=srgb&dl=pexels-pixabay-276514.jpg&fm=jpg")
      /* url("https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?cs=srgb&dl=pexels-ann-h-1762851.jpg&fm=jpg") */
      /* url("https://images.pexels.com/photos/347226/pexels-photo-347226.jpeg?cs=srgb&dl=pexels-aphiwat-chuangchoem-347226.jpg&fm=jpg") */
      no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0px 20px;

  /* & > h1,
  & > p {
    text-align: center;
  } */

  & > h1 {
    color: ${colors.WHITE};
    max-width: 650px;
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
    align-items: center;
  `};
`;

export const TimerBox = styled.div`
  flex-shrink: 0;
  max-width: 950px;
  width: 100%;
  /* background-color: ${colors.WHITE}; */

  color: ${colors.WHITE};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .section {
    flex-shrink: 0;
    flex-basis: 150px;

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid ${colors.WHITE};
    height: 150px;
    border-radius: 50%;
  }

  ${media.mobile`
    justify-content: center;
    width: 150px;
    .section {
      width: 100%;
      margin-top: 15px;
    }
  `};
`;
