import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Select from "../Select";

const mockOptions = [{key: '1', value: 'A'}, {key: '2', value: 'B'}, {key: '3', value: 'C'}]

beforeEach(() =>{
    render(<Select id="0" options={mockOptions} label="Label"></Select>);
})

describe("tests for component Select", () => {
  test("Should render select", () => {
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
  });

  test("Should render options", () => {
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(mockOptions.length);
  });

  test("Should render label", () => {
    const label = screen.getByText("Label");
    expect(label).toBeVisible();
  });
});
