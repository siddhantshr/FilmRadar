import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            globals: {
                ...globals.node
            },
            ecmaVersion: "latest",
            sourceType: "module"
        },
        extends: [js.configs.recommended],
        rules: {
            // 4-space indentation
            indent: ["error", 4],

            // No semicolons
            semi: ["error", "never"],

            // No console.log (warn & error allowed)
            "no-console": ["error", { allow: ["warn", "error"] }]
        }
    }
])
