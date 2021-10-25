import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import PlayCard from "../PlayCard";
import { Play } from "../../../models/Play/Play";

const mockPlay: Play = {
  id: '1',
  name: "Deslenhar",
  poster: {
    caption: "caption",
    image: "https://teatromicanga.com/wp-content/uploads/2021/03/quadrado.png",
  },
  state: "PE",
  sessions: [
    {
      place: {
          id: '1',
          name: "Casarão Magiluth"
      },
      time: {
          day: "27-03-2022",
          hour: "19h"
      }
    },
  ],
};

const mockPlayWithGroup = {
    ...mockPlay,
    group: "Teatro Miçanga"
}

const toBeInDocumentByText = (text : RegExp) => {
  const element = screen.getByText(text)
  expect(element).toBeInTheDocument();
}

describe("tests for component PlayCard", () => {

  test("should print title", () => {
    render(<PlayCard play={mockPlay}></PlayCard>);
    toBeInDocumentByText(/Deslenhar/i)
  });

  test("should print date and hour", () => {
    render(<PlayCard play={mockPlay}></PlayCard>);
    toBeInDocumentByText(/Dia 27 - 19h/i)
  });

  test("should print place", () => {
    render(<PlayCard play={mockPlay}></PlayCard>);
    toBeInDocumentByText(/Casarão Magiluth/i)
  });

  test("should print state, but shouldn't print group if not present", () => {
    render(<PlayCard play={mockPlay}></PlayCard>);

    toBeInDocumentByText(/PE/i)

    const emptyGroup = screen.queryByText(/- PE/i)
    expect(emptyGroup).toBeNull();
  });

  test("should print group if present", () => {
    render(<PlayCard play={mockPlayWithGroup}></PlayCard>);
    toBeInDocumentByText(/Teatro Miçanga - PE/i)
  });

});
