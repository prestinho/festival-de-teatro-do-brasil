import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import SessionInputs from "../SessionInputs";

describe("tests for component SessionInputs", () => {
  test("Should allow only", () => {
    render(<SessionInputs index={0}></SessionInputs>);
  });
});
