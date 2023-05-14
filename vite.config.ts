import dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { SERVER_PORT = 3001, CLIENT_PORT = 3000 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/server-actions": {
        target: `http://localhost:${SERVER_PORT}`,
        changeOrigin: true,
      },
    },
    port: Number(CLIENT_PORT),
  },
});
