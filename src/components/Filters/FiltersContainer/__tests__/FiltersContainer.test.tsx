import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import FiltersContainer from "../FiltersContainer";

describe("tests for component Filters", () => {
    test('Should exist container', () => {
        render(<FiltersContainer></FiltersContainer>);

        const container = screen.getByTestId("filters")
        expect(container).toBeInTheDocument();
    })
})