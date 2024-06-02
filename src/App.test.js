import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main page", () => {
  render(<App />);
  const mainElement = screen.getByTestId("main-page");
  expect(mainElement).toBeInTheDocument();
});
