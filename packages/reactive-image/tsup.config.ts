import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: { resolve: true },
  clean: true,
  sourcemap: true,
  target: "es2021",
  external: ["react", "react-dom"],
});
