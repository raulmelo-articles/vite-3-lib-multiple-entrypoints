import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      // fileName,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      input: {
        "math.js": "./src/math.ts",
        "logger.js": "./src/logger.ts",
      },
    },
  },
});
