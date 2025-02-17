// src/components/Button/Button.test.tsx
import "@testing-library/jest-dom";
import "jest-styled-components"; // Import jest-styled-components
import Button from "./index";
import { render, fireEvent } from "@testing-library/react";
import React from "react";

describe("Button", () => {
    it("renders children correctly", () => {
        const { getByText } = render(<Button>Click Me</Button>);
        expect(getByText("Click Me")).toBeInTheDocument();
    });

    it("triggers onClick event when clicked", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Button onClick={handleClick}>Click Me</Button>);

        fireEvent.click(getByTestId("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies correct styling based on variant", () => {
        const { getByTestId } = render(<Button variant="danger">Delete</Button>);
        const button = getByTestId("button");

        expect(button).toHaveStyleRule("background-color", "#dc3545"); // Base color
        expect(button).toHaveStyleRule("background-color", "#bd2130", {
            modifier: ":hover",
        }); // Hover color
    });

    it("is disabled when disabled prop is passed", () => {
        const { getByTestId } = render(<Button disabled>Disabled</Button>);
        const button = getByTestId("button");

        expect(button).toBeDisabled();
    });
});
