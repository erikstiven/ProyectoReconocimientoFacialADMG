import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true,
    allowedHosts: ['.ngrok-free.dev'],
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },

  base:
    process.env.NODE_ENV === "production"
      ? "/"
      : process.env.VITE_BASE_PATH || "/",

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
