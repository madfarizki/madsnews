import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import * as url from "url";

const dirName = url.fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@/components": path.resolve(dirName, "src/components/"),
        "@/consts": path.resolve(dirName, "src/consts/"),
        "@/utils": path.resolve(dirName, "src/utils/"),
      },
    },
    server: {
      port: 3000,
    },
  };
});
