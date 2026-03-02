import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";
import html from '@html-eslint/eslint-plugin';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node }
  },
  {
    files: ["**/*.html"],
    rules: {
      ...html.configs.recommended.rules,
      "html/require-img-alt": "error",
      "html/no-duplicate-attrs": "error"
    }
  },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  html.configs.recommended
]);

