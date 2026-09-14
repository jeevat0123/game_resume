import { defineConfig } from "vite";

export default defineConfig({
  base: "/game_resume/",
  build: {
    minify: "terser",
  },
});