import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";
import vitePluginString from "vite-plugin-string";

export default defineConfig({
  plugins: [
    solidPlugin(),
    WindiCSS(),
    vitePluginString({ include: ["**/*.txt"], compress: false }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
