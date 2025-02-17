// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1) Specify which files to lint:
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  // 2) Provide language options:
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  // 3) React settings:
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  // 4) Recommended configs:
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // 5) Custom rules (add your own here):
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
