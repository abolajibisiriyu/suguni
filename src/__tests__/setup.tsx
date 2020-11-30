import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import "./windowMocks";

export function setup(
  ui: React.ReactElement<any>,
  { route = "/", state = {}, ...overrides } = {}
) {
  return render(
    <MemoryRouter initialEntries={[{ pathname: route, state }]}>
      {ui}
    </MemoryRouter>,
    overrides
  );
}

export {
  waitFor,
  fireEvent,
  act,
  cleanup,
  screen,
} from "@testing-library/react";
