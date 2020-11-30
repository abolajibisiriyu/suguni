import { FC } from "react";
import { Link } from "react-router-dom";

import { Themes, ThemeBox } from "./styles";
import Theme from "app/models/Theme";
import Form from "app/models/Form";
import Button from "app/styles/Button";

interface Props {
  value: Theme;
  onChange: (v: Theme) => void;
}
const dummyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
aliquid, provident voluptates aut sit iusto vitae iure velit non dolor
rerum suscipit. Corporis ratione distinctio ad magnam! A, deleniti
molestias.`;
const dummyTimeStamp = new Date(new Date().getFullYear() + 1, 3).getTime();
const themes: { name: string; val: Theme; payload: Form }[] = [
  {
    name: "Basic",
    val: "BASIC",
    payload: {
      title: "Be The First To Know!",
      message: dummyText,
      date: dummyTimeStamp,
      theme: "BASIC",
    },
  },
  {
    name: "Creative",
    val: "CREATIVE",
    payload: {
      title: "Are You Ready For This?",
      message: dummyText,
      date: dummyTimeStamp,
      theme: "CREATIVE",
    },
  },
  {
    name: "Abstract",
    val: "ABSTRACT",
    payload: {
      title: "Coming Soon",
      message: dummyText,
      date: dummyTimeStamp,
      theme: "ABSTRACT",
    },
  },
];
const ThemePicker: FC<Props> = (props) => {
  const onThemeSeclected = (theme: Theme) => () => {
    props.onChange(theme);
  };

  const onLinkClicked = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.stopPropagation();
    return true;
  };

  return (
    <Themes className="form-group">
      <label htmlFor="theme">Choose Your Theme</label>
      <input type="hidden" name="theme" value={props.value} />
      <div className="themes">
        {themes.map((_theme) => (
          <ThemeBox
            key={_theme.val}
            role="button"
            onClick={onThemeSeclected(_theme.val)}
          >
            <div
              className={`box ${props.value === _theme.val ? "active" : ""}`}
            >
              <div className="inner" />
            </div>
            <p>
              <span>{_theme.name} - </span>{" "}
              <Button
                as={Link}
                to={{ pathname: "/output", state: _theme.payload }}
                onClick={onLinkClicked}
              >
                View
              </Button>
            </p>
          </ThemeBox>
        ))}
      </div>
    </Themes>
  );
};

export default ThemePicker;
