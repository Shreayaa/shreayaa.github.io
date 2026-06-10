import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    // honor an externally assigned port (e.g. preview tooling); default otherwise
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
