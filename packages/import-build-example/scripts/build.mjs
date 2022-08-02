import { build } from "vite";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const libraries = [
  {
    entry: path.resolve(__dirname, "../src/logger.ts"),
    fileName: "logger",
  },
  {
    entry: path.resolve(__dirname, "../src/math.ts"),
    fileName: "math",
  },
];

libraries.forEach(async (lib) => {
  await build({
    build: {
      outDir: "./dist",
      lib: {
        ...lib,
        formats: ["es", "cjs"],
      },
      emptyOutDir: true,
    },
  });
});
