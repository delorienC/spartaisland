import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "function",
          "format": ["PascalCase"],
          "custom": { "regex": "^[A-Z]", "match": true },
          "filter": {
            "regex": "^(use[A-Z])", // Exclude Hooks (useState, useEffect)
            "match": false
          }
        },
        // 🔹 camelCase for normal functions (e.g. loginUser)
        {
          "selector": "function",
          "format": ["camelCase"],
          "custom": { "regex": "^[a-z]", "match": true }
        }
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];
