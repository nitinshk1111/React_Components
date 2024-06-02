import { render, screen } from "@testing-library/react";
import React from "react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  test("renders without crashing", () => {
    render(<ProgressBar />);
  });

  it("renders the progress bar with the correct filled width", () => {
    const progress = 50;
    render(<ProgressBar progress={progress} />);
    const progressBar = screen.getByTestId("progress-bar");

    expect(progressBar).toHaveStyle(`width: ${50}%`);
  });

  it("renders the progress bar with the default width if progress prop is not provided", () => {
    render(<ProgressBar />);
    const progressBar = screen.getByTestId("progress-bar");

    expect(progressBar).toHaveStyle(`width: 0%`);
  });

  it("renders the progress bar with the success variant", () => {
    render(<ProgressBar success />);
    const progressBar = screen.getByTestId("progress-bar");
    expect(progressBar).toHaveStyle("backgroundColor: green");
  });

  it("renders the progress bar with the error  variant", () => {
    render(<ProgressBar warning />);
    const progressBar = screen.getByTestId("progress-bar");
    expect(progressBar).toHaveStyle("backgroundColor: #ff9800");
  });
});
