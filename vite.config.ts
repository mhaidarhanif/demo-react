import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// esbuild + babel
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
