import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import TextFilter from "../TextFilter";

describe("tests for component TextFilter", () => {
    
    test("Should have an input with provided props", () => {
        render(<TextFilter data-testid="testing-input"/>)    
        
        const input = screen.getByTestId("testing-input")

        expect(input).toBeInTheDocument();
    })
})