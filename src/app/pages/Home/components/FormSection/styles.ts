import styled, { css } from "styled-components";

import colors from "app/styles/utils/colors";
import media from "app/styles/utils/media";

const Inputstyles = css`
  border: none;
  font-size: 0.9rem;
  background-color: ${colors.ANTI_FLASH_WHITE};
  outline: none;
  padding: 10px;

  border: 1px solid ${colors.PRESTIGE_BLUE};
  border-radius: 3px;
  transition: background-color 300ms ease-in-out;

  resize: none;

  &:focus {
    background-color: ${colors.WHITE};
  }
`;

export const Form = styled.form`
  opacity: 0;
  transform: translateY(200px);

  transition: opacity 500ms 200ms ease-out, transform 1000ms 200ms ease-out;

  width: 640px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;

  .form-group {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 10px;
    }
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }

  .date-picker {
    font-family: inherit;
    .react-date-picker__wrapper {
      ${Inputstyles};
      height: 43px;
    }
    .react-calendar {
      font-family: inherit;
    }
    .react-date-picker__calendar[style] {
      top: 100% !important;
      left: 0 !important;
    }
  }

  & > button {
    margin-top: 50px;
  }
`;

export const Textarea = styled.textarea`
  ${Inputstyles};
  height: 200px;
`;

export const Input = styled.input`
  ${Inputstyles};
  height: 43px;
`;

export const FormSectionBox = styled.section`
  background-color: ${colors.ANTI_FLASH_WHITE};
  padding: 100px 0px 149px;

  .title {
    font-size: 2.4rem;
    font-weight: 900;
    text-align: center;

    opacity: 0;
    transform: translateY(200px);

    transition: opacity 500ms 100ms ease-out, transform 1000ms 100ms ease-out;
  }

  &.is-visible {
    .title,
    ${Form} {
      opacity: 1;
      transform: none;
    }
  }

  ${media.smallDesktop`
    padding: 100px 40px;
    & > .title {
      font-size: 1.8rem;
    }
  `};

  ${media.tablet`
    padding: 100px 30px;
    & > .title {
      font-size: 1.8rem;
    }
  `};
`;

export const Themes = styled.div`
  .themes {
    margin-top: 10px;
    display: flex;
  }
`;

export const ThemeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }
  .box {
    height: 30px;
    width: 30px;
    border: 2px solid ${colors.PRESTIGE_BLUE};
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 2px;
    .inner {
      width: 100%;
      height: 100%;
      border: 2px solid transparent;
      background-color: transparent;
      transition: background-color 300ms ease-in-out;
    }
    &.active {
      .inner {
        background-color: ${colors.SATURATED_SKY};
      }
    }
  }

  a {
    font-size: 0.7rem;
  }
`;
