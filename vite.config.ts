import {defineConfig} from "vite";
import react, {reactCompilerPreset} from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    // Only use the sub-directory on GitHub Pages (production)
    base: process.env.NODE_ENV === 'production' ? '/index47v1/' : '/',
    plugins: [react(), babel({presets: [reactCompilerPreset()]}), tailwindcss()]
});
