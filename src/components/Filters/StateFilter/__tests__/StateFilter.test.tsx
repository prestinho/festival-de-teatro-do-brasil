import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import StateFilter from "../StateFilter";

const states = [
  { key: "1", value: "a" },
  { key: "2", value: "b" },
  { key: "3", value: "v" },
  { key: "4", value: "d" },
];

const mockHandler = jest.fn();

describe("tests for component StateFilter", () => {
  test("Should render all available states", () => {
    render(
      <StateFilter states={states} checked="1" handleChange={mockHandler}></StateFilter>
    );

    states.forEach((state: { key: any; value: string }) => {
      const element = screen.getByText(state.key);
      expect(element).toBeInTheDocument();
    });
  });
});
