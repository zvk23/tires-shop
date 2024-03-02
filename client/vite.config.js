import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    symlinks: false,
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "vue",
        replacement: path.resolve("./node_modules/vue"),
      },
      {
        find: "vue-router",
        replacement: path.resolve("./node_modules/vue-router"),
      },
    ],
  },
});
