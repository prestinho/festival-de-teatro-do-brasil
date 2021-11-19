import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import PlayDetailsBody from "../PlayDetailsBody";
import { mockPlay } from "../../../../../mocks/mockPlay";

describe("tests for component PlayDetailsBody", () => {
  beforeEach(() => {
    render(<PlayDetailsBody play={mockPlay}></PlayDetailsBody>);
  });
  test("Should render about", () => {
    expect(screen.getByText("about")).toBeInTheDocument();
  });
  test("Should render crew", () => {
    expect(screen.getByText("crew")).toBeInTheDocument();
  });
  test("Should render sessions", () => {
    expect(screen.getByText("place-name")).toBeInTheDocument();
    expect(screen.getByText("place-address")).toBeInTheDocument();
    expect(screen.getByText("Dia 25 - 20:00h")).toBeInTheDocument();
  });
});
