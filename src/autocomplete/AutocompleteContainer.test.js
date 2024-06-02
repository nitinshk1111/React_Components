import { render, screen } from "@testing-library/react";
import AutocompleteContainer from "./AutocompleteContainer";

describe("AutocompleteContainer", () => {
  // Test case 1: Verify that the component renders
  test("renders without crashing", () => {
    render(<AutocompleteContainer />);
    expect(screen.getByTestId("autocomplete-container")).toBeInTheDocument();
  });

  // Test case 2: Verify that the component renders the input field correctly
  test("renders input field correctly", () => {
    render(<AutocompleteContainer />);
    const inputElement = screen.getByPlaceholderText(/search country/i);
    expect(inputElement).toBeInTheDocument();
  });
});
