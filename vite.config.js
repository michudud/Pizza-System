import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Pizza-System/",
  root: "src",
  build: { outDir: "../dist" },
});
