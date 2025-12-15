import js from "@eslint/js"
import globals from "globals"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: {
            globals: globals.browser
        },
        rules: {
            // 4-space indentation
            indent: ["error", 4],
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],

            // No semicolons
            semi: ["error", "never"],

            // No console.log
            "no-console": ["error", { allow: ["warn", "error"] }]
        }
    },

    // React recommended rules
    pluginReact.configs.flat.recommended,

    {
        rules: {
            "react/react-in-jsx-scope": "off"
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    }
])