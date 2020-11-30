import { render, screen } from "@testing-library/react";
import App from "./app";

test("renders home link", () => {
  render(<App />);
  const linkElement = screen.getByText(/suguni/i);
  expect(linkElement).toBeInTheDocument();
});
