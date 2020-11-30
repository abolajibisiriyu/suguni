import styled from "styled-components";

import colors from "app/styles/utils/colors";
import media from "app/styles/utils/media";

export const Nav = styled.nav`
  border-top: 5px solid ${colors.SATURATED_SKY};

  .content {
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    height: 84px;
    display: flex;
    align-items: center;
    padding: 0px 50px;
    & > a.logo {
      text-decoration: none;
      color: inherit;
      display: flex;
      align-items: center;
      & > img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }
  }
`;

export const TextSection = styled.section`
  .title,
  .sub-title {
    max-width: 100%;
    opacity: 0;
    transform: translateY(60px);
  }
  .title {
    width: 507px;
    /* font-size: 2.5rem; */
    font-size: 3rem;
    margin-bottom: 30px;
    transition: opacity 500ms ease-out, transform 1000ms ease-out;
  }
  .sub-title {
    width: 528px;
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.GRISAILLE};
    transition: opacity 500ms 100ms ease-out, transform 1000ms 100ms ease-out;
  }
  .see-how {
    margin-top: 50px;
    width: 305px;
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 500ms 300ms ease-out, transform 1000ms 300ms ease-out;
  }

  ${media.smallDesktop`
    padding-top: 109px;

    .title {
      width: 406px;
      font-size: 2rem;
      margin-bottom: 18px;
    }
    .sub-title{
      width: 452px;
      font-size: 0.85rem;
    }
  `};

  ${media.tablet`
    width: 100%;
  `};
`;

export const Image = styled.div`
  flex-shrink: 0;
  height: 649px;
  width: 620px;
  /* background: url("https://res.cloudinary.com/abolajibisiriyu/image/upload/v1606590080/suguni/conifer-181.png")
    no-repeat;
  background-size: cover; */

  img {
    width: 100%;
    height: 100%;
  }

  opacity: 0;
  transform: translateX(100px);

  transition: opacity 500ms 900ms ease-out, transform 1000ms 700ms ease-out;

  ${media.tablet`
    width: 100%;
  `};

  ${media.mobile`
    height: 400px;
    margin-top: 92px;
  `};
`;

export const Hero = styled.header`
  width: 100%;
  max-width: 1380px;
  min-height: calc(100vh - 84px);
  margin: 0 auto;

  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  margin-bottom: 10px;

  &.is-visible {
    ${TextSection} {
      .title,
      .sub-title,
      .see-how {
        opacity: 1;
        transform: none;
      }
    }

    ${Image} {
      opacity: 1;
      transform: none;
    }
  }

  ${media.smallDesktop`
    padding: 0px 40px 45px;
    min-height: 579px;
  `};

  ${media.tablet`
    padding: 0px 30px 45px;
    flex-wrap: wrap;
  `};
`;
