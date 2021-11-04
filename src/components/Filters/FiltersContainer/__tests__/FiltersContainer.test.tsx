import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FiltersContainer from "../FiltersContainer";

const mockSetFilters = jest.fn();

describe("tests for component Filters", () => {
  test("Should exist container", () => {
    render(<FiltersContainer filters={{ state: "PE" }} setFilters={mockSetFilters} />);

    const container = screen.getByTestId("filters");
    expect(container).toBeInTheDocument();
  });
});
