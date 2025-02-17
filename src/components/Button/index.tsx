// src/components/Button/index.tsx
import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled";

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    $fullWidth = false,
    onClick,
}) => {
    return (
        <StyledButton
            variant={variant}
            size={size}
            disabled={disabled}
            $fullWidth={$fullWidth}
            onClick={onClick}
            data-testid="button">
            {children}
        </StyledButton>
    );
};

export default Button;
