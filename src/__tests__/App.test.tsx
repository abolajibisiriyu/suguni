import { screen } from "@testing-library/react";
import App from "app";

import { setup } from "./setup";

describe("App", () => {
  test("shows app logo", async () => {
    setup(<App />);

    const linkElement = screen.getByTitle("logo");
    expect(linkElement).toBeInTheDocument();
  });
});
