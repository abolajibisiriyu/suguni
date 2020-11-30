import { screen } from "@testing-library/react";
import { Routes } from "app";

import { setup } from "__tests__/setup";

describe("Home Page", () => {
  test("renders header", async () => {
    setup(<Routes />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
