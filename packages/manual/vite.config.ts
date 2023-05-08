import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      formats: ["cjs", "es"],
      entry: {
        math: "./src/math.js",
        logger: "./src/logger.js",
      },
    },
  },
});
