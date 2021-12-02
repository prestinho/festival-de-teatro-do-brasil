import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DateFilter from "../DateFilter";

const mockDates = [
  { key: "1", value: "one" },
  { key: "2", value: "two" },
  { key: "3", value: "three" },
];

const mockHandleChange = jest.fn();

describe("tests for component DateFilter", () => {
  test("Should have an extra option with text: TODOS ", () => {
    render(<DateFilter dates={mockDates} checked="" handleChange={mockHandleChange} />);

    const option = screen.getByText("TODOS");

    expect(option).toBeVisible();
  });

  test("Should have all options ", () => {
    render(<DateFilter dates={mockDates} checked="" handleChange={mockHandleChange} />);

    mockDates.forEach((date) => {
      const option = screen.getByText(date.value);
      expect(option).toBeVisible();
    });
  });

  test("Should select an option on click ", async () => {
    render(<DateFilter dates={mockDates} checked="" handleChange={mockHandleChange} />);

    const option = screen.getByText("one");

    await userEvent.click(option);

    expect(mockHandleChange).toBeCalled();
  });
});
