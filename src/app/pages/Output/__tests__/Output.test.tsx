import { screen } from "@testing-library/react";
import { Routes } from "app";

import { setup } from "__tests__/setup";

const dummyText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
aliquid, provident voluptates aut sit iusto vitae iure velit non dolor
rerum suscipit. Corporis ratione distinctio ad magnam! A, deleniti
molestias.`;
const dummyTimeStamp = new Date(new Date().getFullYear() + 1, 3).getTime();
const mockState = {
  title: "Be The First To Know!",
  message: dummyText,
  date: dummyTimeStamp,
  theme: "BASIC",
};

describe("Output Page", () => {
  test("redirects when no state was passed", async () => {
    setup(<Routes />, { route: "/output" });

    expect(window.location.pathname).toBe("/");
  });

  test("chooses correct theme based on passed state", async () => {
    setup(<Routes />, { route: "/output", state: mockState });

    const themeContainer = screen.getByTestId(mockState.theme);
    expect(themeContainer).toBeInTheDocument();
  });

  test("shows correct submitted information based on passed state", async () => {
    setup(<Routes />, { route: "/output", state: mockState });

    const themeContainer = screen.getByTestId(mockState.theme);
    expect(themeContainer).toBeInTheDocument();

    const titleText = screen.getByText(mockState.title);
    const messageText = screen.getByText((text, node) => {
      return node.textContent === mockState.message;
    });

    expect(titleText).toBeInTheDocument();
    expect(messageText).toBeInTheDocument();
  });
});
