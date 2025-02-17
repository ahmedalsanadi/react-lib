// src/components/Button/styled.ts
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

const variants = {
    primary: css`
        background-color: #007bff;
        color: white;
        &:hover {
            background-color: #0056b3;
        }
    `,
    secondary: css`
        background-color: #6c757d;
        color: white;
        &:hover {
            background-color: #545b62;
        }
    `,
    danger: css`
        background-color: #dc3545;
        color: white;
        &:hover {
            background-color: #bd2130;
        }
    `,
    outline: css`
        background-color: transparent;
        border: 2px solid #007bff;
        color: #007bff;
        &:hover {
            background-color: #007bff;
            color: white;
        }
    `,
    text: css`
        background-color: transparent;
        color: #007bff;
        &:hover {
            text-decoration: underline;
        }
    `,
};

const sizes = {
    small: css`
        padding: 6px 12px;
        font-size: 14px;
    `,
    medium: css`
        padding: 8px 16px;
        font-size: 16px;
    `,
    large: css`
        padding: 10px 20px;
        font-size: 18px;
    `,
};

export const StyledButton = styled.button<ButtonProps>`
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    ${({ variant }) => variants[variant || "primary"]}
    ${({ size }) => sizes[size || "medium"]}

    /* Apply full width styling if $fullWidth is true */
    ${({ $fullWidth }) =>
        $fullWidth &&
        css`
            width: 100%;
        `}

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
