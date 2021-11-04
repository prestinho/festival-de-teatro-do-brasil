import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import ImageInput from "../ImageInput";
import userEvent from "@testing-library/user-event";

const mockImage = { image: "", caption: "" };

const mockOnChange = jest.fn();

describe("tests for component ImageInput", () => {
  test("Should Render Caption Input", () => {
    render(
      <ImageInput
        image={mockImage}
        placeholderCaption="Placeholder Caption"
        placeholderImage="Placeholder Image"
      />
    );
    const caption = screen.getByText("Placeholder Caption");
    expect(caption).toBeVisible();
  });

  test("Should Render Image Input", () => {
    render(
      <ImageInput
        image={mockImage}
        placeholderCaption="Placeholder Caption"
        placeholderImage="Placeholder Image"
      />
    );
    const image = screen.getByText("Placeholder Image");
    expect(image).toBeVisible();
  });

  test("Should call onChange for image", async () => {
    render(
      <ImageInput
        image={mockImage}
        placeholderCaption="Placeholder Caption"
        placeholderImage="Placeholder Image"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByTestId("image");
    await userEvent.type(input, "some typed input");

    expect(mockOnChange).toBeCalled();
  });

  test("Should call onChange for caption", async () => {
    render(
      <ImageInput
        image={mockImage}
        placeholderCaption="Placeholder Caption"
        placeholderImage="Placeholder Image"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByTestId("caption");
    await userEvent.type(input, "some typed input");

    expect(mockOnChange).toBeCalled();
  });
});
