import Button from ".";

export default {
    title: "MyComponents/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "The button text",
            control: { type: "text" },
        },
        variant: {
            description: "Button variant",
            control: { type: "select", options: ["primary", "secondary", "danger", "outline", "text"] },
        },
        size: {
            description: "Button size",
            control: { type: "select", options: ["small", "medium", "large"] },
        },
        disabled: {
            description: "Disable the button",
            control: { type: "boolean" },
        },
        fullWidth: {
            description: "Make button full width",
            control: { type: "boolean" },
        },
        onClick: {
            action: "clicked",
        },
    },
};

export const Primary = {
    args: {
        children: "Primary Button",
        variant: "primary",
        size: "medium",
    },
};

export const Secondary = {
    args: {
        children: "Secondary Button",
        variant: "secondary",
        size: "medium",
    },
};

export const Danger = {
    args: {
        children: "Danger Button",
        variant: "danger",
        size: "medium",
    },
};

export const Outline = {
    args: {
        children: "Outline Button",
        variant: "outline",
        size: "medium",
    },
};

export const TextButton = {
    args: {
        children: "Text Button",
        variant: "text",
        size: "medium",
    },
};

export const Disabled = {
    args: {
        children: "Disabled Button",
        variant: "primary",
        disabled: true,
    },
};

export const FullWidth = {
    args: {
        children: "Full Width Button",
        variant: "primary",
        fullWidth: true,
    },
};
