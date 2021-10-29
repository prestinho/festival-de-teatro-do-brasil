import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LabeledInput from "../LabeledInput";

describe("tests for component LabeledInput", () => {
  test("Should create an input", () => {
    render(
      <LabeledInput
        id="id"
        placeholder="Place Holder"
        type="textarea"
      ></LabeledInput>
    );

    const labeledInput = screen.getByRole("textbox");

    expect(labeledInput).toBeInTheDocument();
  });

  test("Should create a placeholder", () => {
    render(
      <LabeledInput
        id="id"
        placeholder="Place Holder"
        type="text"
      ></LabeledInput>
    );

    const label = screen.getByText("Place Holder");

    expect(label).toBeInTheDocument();
  });

  test("Should keep placeholder as label", async () => {
    render(
      <LabeledInput
        id="id"
        placeholder="Place Holder"
        type="text"
      ></LabeledInput>
    );

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "some typed input");

    const label = screen.getByText("Place Holder");

    expect(label).toBeVisible();
    expect(input).toHaveValue("some typed input");
  });
});
