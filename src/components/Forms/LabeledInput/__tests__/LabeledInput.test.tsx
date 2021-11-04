import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LabeledInput from "../LabeledInput";

describe("tests for component LabeledInput", () => {
  describe("Tests for what is rendered", () => {
    beforeEach(() => {
      render(
        <LabeledInput id="id" placeholder="Place Holder" type="textarea"></LabeledInput>
      );
    });
    test("Should create an input", () => {
      const labeledInput = screen.getByRole("textbox");

      expect(labeledInput).toBeInTheDocument();
    });

    test("Should create a placeholder", () => {
      const label = screen.getByText("Place Holder");

      expect(label).toBeInTheDocument();
    });

    test("Should keep placeholder as label", async () => {
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "some typed input");

      const label = screen.getByText("Place Holder");

      expect(label).toBeVisible();
      expect(input).toHaveValue("some typed input");
    });
  });

  describe("tests for validations", () => {
    const expectError = () => {
      const label = screen.getByText("Error message");
      expect(label).toBeVisible();
    };

    const expectNoError = () => {
      const label = screen.queryByText("Error message");
      expect(label).not.toBeInTheDocument();
    };

    test("Should validate if required", async () => {
      render(
        <LabeledInput
          id="id"
          placeholder="Place Holder"
          type="text"
          forceValidation={true}
          errorMsg={"Error message"}
          value=""
          required
        ></LabeledInput>
      );

      expectError();
    });

    test("Should pass validation without any value and not required", async () => {
      render(
        <LabeledInput
          id="id"
          placeholder="Place Holder"
          type="text"
          forceValidation={true}
          errorMsg={"Error message"}
        ></LabeledInput>
      );

      expectNoError();
    });

    test("Should validate min value", async () => {
      render(
        <LabeledInput
          id="id"
          placeholder="Place Holder"
          type="number"
          min={2}
          value={1}
          forceValidation={true}
          errorMsg={"Error message"}
        ></LabeledInput>
      );

      expectError();
    });

    test("Should pass validation if min value is respected", async () => {
      render(
        <LabeledInput
          id="id"
          placeholder="Place Holder"
          type="number"
          min={2}
          value={3}
          forceValidation={true}
          errorMsg={"Error message"}
        ></LabeledInput>
      );

      expectNoError();
    });

    test("Should validate max value", async () => {
      render(
        <LabeledInput
          id="id"
          placeholder="Place Holder"
          type="number"
          max={2}
          value={3}
          forceValidation={true}
          errorMsg={"Error message"}
        ></LabeledInput>
      );

      expectError();
    });

    test("Should pass validation if max value is respected", async () => {
      render(
        <LabeledInput
          id="id"
          placeholder="Place Holder"
          type="number"
          max={2}
          value={1}
          forceValidation={true}
          errorMsg={"Error message"}
        ></LabeledInput>
      );

      expectNoError();
    });

    test("Should validate link value", async () => {
      render(
        <LabeledInput
          id="id"
          placeholder="Place Holder"
          type="text"
          value="a"
          link
          forceValidation={true}
          errorMsg={"Error message"}
        ></LabeledInput>
      );

      expectError();
    });

    test("Should pass validation if link value is respected", async () => {
      render(
        <LabeledInput
          id="id"
          placeholder="Place Holder"
          type="text"
          value="http://www.google.com"
          link
          forceValidation={true}
          errorMsg={"Error message"}
        ></LabeledInput>
      );

      expectNoError();
    });
  });
});
