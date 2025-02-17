// src/components/Button/types.ts
// src/components/Button/types.ts
export type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger" | "outline" | "text";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    /** Rename fullWidth to $fullWidth to mark it as transient */
    $fullWidth?: boolean;
    onClick?: () => void;
};
