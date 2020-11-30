import { FC } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";

import Abstract from "./components/Abstract";
import Basic from "./components/Basic";
import Creative from "./components/Creative";
import Button from "app/styles/Button";
import { OutBody, OutputContainer } from "./styles";
import Form from "app/models/Form";

const themes = {
  BASIC: Basic,
  ABSTRACT: Abstract,
  CREATIVE: Creative,
};

const Output: FC = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const { state } = useLocation<Form>();

  if (!state) return <Redirect to="" />;

  const SelctedTheme = themes[state.theme];

  return (
    <OutputContainer>
      <div className="header">
        <Button onClick={goBack}>Go Back</Button>
      </div>
      <OutBody data-testid={state.theme}>
        {SelctedTheme && <SelctedTheme theme={state} />}
      </OutBody>
    </OutputContainer>
  );
};

export default Output;
