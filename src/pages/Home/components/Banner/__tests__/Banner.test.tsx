import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Banner from "../Banner";

describe("tests for component Banner", () => {
  test("Should render title", () => {
    render(<Banner />);
    const text = screen.getByText(/I FESTIVAL DE TEATRO DO BRASIL/i);
    expect(text).toBeInTheDocument();
  });

  test("Should render days", () => {
    render(<Banner />);
    const text = screen.getByText(/Dias 25, 26 e 27 de Março/i);
    expect(text).toBeInTheDocument();
  });
});
