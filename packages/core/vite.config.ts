import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      formats: ["es", "cjs"],
      entry: {
        math: "./src/math.js",
        logger: "./src/logger.js",
      },
    },
  },
});
