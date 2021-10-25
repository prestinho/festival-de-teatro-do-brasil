import React from "react";
import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import StateFilter from "../StateFilter";
import { states } from '../../../../models/State/states';

describe("tests for component StateFilter", () => {
    test('Should render all available states', () => {
        render(<StateFilter states={states}></StateFilter>);
        
        states.forEach((state: string) => {
            const element = screen.getByText(state);
            expect(element).toBeInTheDocument();
        })
        
    })
})