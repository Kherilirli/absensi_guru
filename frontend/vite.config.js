import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  optimizeDeps: {
    exclude: ['jspdf', 'jspdf-autotable', 'xlsx'],
  },
  build: {
    rollupOptions: {
      external: ['jspdf', 'jspdf-autotable', 'xlsx'],
    }
  }
})
