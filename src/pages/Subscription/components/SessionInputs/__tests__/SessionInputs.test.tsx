import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import SessionInputs from "../SessionInputs";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";

const mockSessions = [
  {
    time: { hour: "12:00", day: "2022-03-26" },
    place: { id: "id", name: "name", address: "address" },
  },
  {
    time: { hour: "12:00", day: "2022-03-26" },
    place: { id: "id2", name: "name2", address: "address2" },
  },
  {
    time: { hour: "12:00", day: "2022-03-26" },
    place: { id: "id3", name: "name3", address: "address3" },
  },
  {
    time: { hour: "12:00", day: "2022-03-26" },
    place: { id: "id4", name: "name4", address: "address4" },
  },
];

const mockOnChange = jest.fn();

describe("tests for component SessionInputs", () => {
  describe("tests for one session input only", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(
        <SessionInputs
          index={0}
          session={mockSessions[0]}
          onChange={mockOnChange}
          forceValidation={false}
        />
      );
    });
    test("Should render day", () => {
      const input = screen.getByText("Dia");
      expect(input).toBeVisible();
    });

    test("Should render time", () => {
      const input = screen.getByText("Horário");
      expect(input).toBeVisible();
    });

    test("Should render place", () => {
      const input = screen.getByText("Local");
      expect(input).toBeVisible();
    });

    test("Should render address", () => {
      const input = screen.getByText("Endereço");
      expect(input).toBeVisible();
    });

    test("Shouldn't render trash for single session", () => {
      const input = screen.queryByTitle("Remover Sessão");
      expect(input).not.toBeInTheDocument();
    });

    test("Should call onChange for day", async () => {
      const input = screen.getByTestId("session-day-0");
      // USAGE: await act(() => waitFor(() => { expect(something).toBe("blah"); }));
      await userEvent.type(input, "type something");

      await waitFor(
        () => {
          expect(mockOnChange).toBeCalled();
        },
        { timeout: 1000 }
      );
    });

    test("Should call onChange for time", async () => {
      const input = screen.getByTestId("session-hour-0");
      await userEvent.type(input, "type something");

      await waitFor(
        () => {
          expect(mockOnChange).toBeCalled();
        },
        { timeout: 1000 }
      );
    });

    test("Should call onChange for place", async () => {
      const input = screen.getByTestId("session-place-0");
      await userEvent.type(input, "type something");

      await waitFor(
        () => {
          expect(mockOnChange).toBeCalled();
        },
        { timeout: 1000 }
      );
    });

    test("Should call onChange for address", async () => {
      const input = screen.getByTestId("session-address-0");
      await userEvent.type(input, "type something");

      await waitFor(
        () => {
          expect(mockOnChange).toBeCalled();
        },
        { timeout: 1000 }
      );
    });
  });

  describe("tests for more than one session input", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      mockSessions.forEach((session, index) => {
        render(
          <SessionInputs
            index={index}
            session={session}
            onChange={mockOnChange}
            forceValidation={false}
          />
        );
      });
    });

    test("Should render the trash", () => {
      const input = screen.getAllByTitle("Remover Sessão");
      expect(input.length).toBe(mockSessions.length - 1);
    });
  });
});
