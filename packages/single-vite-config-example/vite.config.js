import { resolve } from "path";
import { defineConfig } from "vite";

const config = {
  math: {
    entry: resolve(__dirname, "./src/math.ts"),
    fileName: "math.js",
  },
  logger: {
    entry: resolve(__dirname, "./src/logger.ts"),
    fileName: "logger.js",
  },
};

const currentConfig = config[process.env.LIB_NAME];

if (currentConfig === undefined) {
  throw new Error('LIB_NAME is not defined or is not valid');
}

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    sourcemap: true,
    lib: {
      ...currentConfig,
      formats: ["cjs", "es"],

    },
  },
});
