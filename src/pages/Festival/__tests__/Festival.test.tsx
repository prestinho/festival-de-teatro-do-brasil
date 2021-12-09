import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Festival from "../Festival";

// TODO: create test for Festival
describe("tests for component Festival", () => {
  test("Should render Title", () => {
    render(
      <BrowserRouter>
        <Festival />
      </BrowserRouter>
    );

    const text = screen.getAllByText("I Festival de Teatro do Brasil");

    expect(text[0].tagName).toBe("H1");
  });
});
