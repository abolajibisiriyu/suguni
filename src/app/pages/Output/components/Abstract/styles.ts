import styled from "styled-components";

import colors from "app/styles/utils/colors";
import media from "app/styles/utils/media";
// import bg from "./Abstract_Background_with_Blue_Triangles.jpg";

export const AbstractContainer = styled.section`
  overflow-x: hidden;
  background: url("https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606682277/suguni/abstract-118.png")
      no-repeat,
    url("https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606682443/suguni/abstract-119.png")
      no-repeat,
    url("https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606682590/suguni/abstract-121_1.png")
      no-repeat;
  background-size: 300px;
  /* background-size: contain, 20%; */
  background-position: right top, right bottom, left bottom;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 200px;

  /* background-color: #f1f2f6; */

  .img-section {
  }

  ${media.smallDesktop`
    padding: 0px 50px;
  `};

  ${media.tablet`
    flex-wrap: wrap;
    align-items: unset;
  `};

  ${media.mobile`
    padding: 0px 20px;
    background: url("https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606682277/suguni/abstract-118.png")
      no-repeat,
    url("https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606682590/suguni/abstract-121_1.png")
      no-repeat;
    background-size: 300px;
    background-position: right top, left bottom;
    padding: 20px;
  `};
`;

export const Image = styled.img`
  height: 500px;

  ${media.smallDesktop`
    height: 400px;
  `};

  ${media.tablet`
    height: 200px;
  `};

  /* ${media.mobile`
    height: 200px;
  `}; */
`;

export const TextSection = styled.section`
  /* margin-left: 50px; */
  text-align: center;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  color: ${colors.PRESTIGE_BLUE};
  h1 {
    font-weight: 900;
  }
  & > p {
    margin-top: 40px;
    width: 500px;
    max-width: 100%;
    align-self: center;
  }

  ${media.smallDesktop`
    h1 {
        font-size: 2.4rem;
    }
  `};

  ${media.mobile`
    h1 {
        font-size: 1.8rem;
    }
    & > p {
        width: 100%;
    }
  `};
`;

export const TimerBoxes = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  .timer-box {
    border: 1px solid ${colors.PRESTIGE_BLUE};
    border-radius: 20px;

    padding: 20px 0px;
    flex-basis: 150px;

    p {
      text-transform: capitalize;
    }

    &:not(:last-child) {
      margin-right: 40px;
    }
  }

  ${media.smallDesktop`
    .timer-box {
        flex-basis: 100px;

        h4 {
            font-size: 1.8rem;
        }
    }
  `};

  ${media.mobile`
    .timer-box {
        border: none;
        flex-shrink: 1;
        flex-basis: auto;
        h4 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }

        &:not(:last-child) {
            margin-right: 0px;
        }
    }
  `};
`;
