import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Builds the demo React app (App.tsx) as a static site into build/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});
