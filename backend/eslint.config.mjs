import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pkg from 'eslint-config-prettier';

const { rules } = pkg;




export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  rules,
];