import js from "@eslint/js";
import next from "eslint-config-next";
import prettierRecommended from "eslint-plugin-prettier/recommended";

const eslintConfig = [
  js.configs.recommended,
  ...next,
  prettierRecommended,
  {
    ignores: [".next/*", ".prettierrc.js", "out/*"],
  },
];

export default eslintConfig;
