import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Autocomplete from "./Autocomplete";

let mockedfilteredSuggestions = [
  {
    name: "Afghanistan",
    code: "AF",
  },
  {
    name: "Albania",
    code: "AL",
  },
  {
    name: "Algeria",
    code: "DZ",
  },
];

const onSearch = jest.fn();

describe("Autocomplete", () => {
  // Test case 1: Verify that the component renders
  test("renders AutoComplete", () => {
    render(<Autocomplete />);
    const elem = screen.getByTestId("autocomplete");
    expect(elem).toBeInTheDocument();
  });

  //   Test case 2: Verify that the component renders the input field correctly
  test("renders input field correctly", () => {
    render(<Autocomplete />);
    const inputElement = screen.getByTestId("searchInput");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders suggestion list correctly", async () => {
    render(
      <Autocomplete
        onSearch={onSearch}
        filteredSuggestions={mockedfilteredSuggestions}
      />
    );

    const inputElement = screen.getByTestId("searchInput");
    fireEvent.change(inputElement, { target: { value: "a" } });
    await waitFor(
      () => {
        expect(screen.getByTestId("suggestionContainer")).toBeInTheDocument();
      },
      { timeout: 500 }
    );
  });

  // Test case 6: Verify that the component hides the suggestion list when input is empty
  test("hides suggestion list when input is empty", async () => {
    render(
      <Autocomplete
        onSearch={onSearch}
        filteredSuggestions={mockedfilteredSuggestions}
      />
    );
    const inputElement = screen.getByTestId("searchInput");
    fireEvent.change(inputElement, { target: { value: "" } });
    await waitFor(
      () => {
        expect(
          screen.queryByTestId("suggestionContainer")
        ).not.toBeInTheDocument();
      },
      { timeout: 500 }
    );
  });

  test("selects active suggestion when Enter is pressed", async () => {
    render(
      <Autocomplete
        onSearch={onSearch}
        filteredSuggestions={mockedfilteredSuggestions}
      />
    );
    const inputElement = screen.getByTestId("searchInput");
    fireEvent.change(inputElement, { target: { value: "a" } });
    fireEvent.keyDown(inputElement, { keyCode: 40 });
    fireEvent.keyDown(inputElement, { keyCode: 13 });

    await waitFor(
      () => {
        expect(screen.queryByTestId("searchInput").value).toBe("Afghanistan");
      },
      { timeout: 500 }
    );
  });

  //write test case for clickoutside event
  test("hides suggestion list when clicked outside", async () => {
    render(
      <div>
        <Autocomplete
          onSearch={onSearch}
          filteredSuggestions={mockedfilteredSuggestions}
        />
        <div data-testid="outsideElement">Outside Element</div>
      </div>
    );
    const inputElement = screen.getByTestId("searchInput");
    fireEvent.change(inputElement, { target: { value: "a" } });
    await waitFor(
      () => {
        expect(screen.getByTestId("suggestionContainer")).toBeInTheDocument();
      },

      { timeout: 500 }
    );
    fireEvent.mouseDown(screen.getByTestId("outsideElement"));

    await waitFor(() => {
      expect(
        screen.queryByTestId("suggestionContainer")
      ).not.toBeInTheDocument();
    });

    // const suggestionContainer = await screen.not.findByTestId(
    //   "suggestionContainer"
    // );
    // console.log(suggestionContainer);
    // expect(suggestionContainer).not.toBeInTheDocument();
  });
});
