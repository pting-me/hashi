import path from "node:path";

import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "dev";

  return {
    plugins: [react(), viteSingleFile()],
    server: { port: 31337 },
    build: {
      minify: isDev ? false : "esbuild",
      emptyOutDir: !isDev,
      outDir: path.resolve(__dirname, "../../dist/"),
    },
  };
});
