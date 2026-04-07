import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const REPO_NAME = "scaore-app-js";

export default defineConfig(({ command }) => ({
    base: command === "serve" ? "/" : `/${REPO_NAME}/`,
    plugins: [react()]
}));
