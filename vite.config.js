import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env.VITE_X_API_KEY': JSON.stringify(process.env.VITE_X_API_KEY),
    'process.env.VITE_X_USER_EMAIL': JSON.stringify(process.env.VITE_X_USER_EMAIL),
    'process.env.VITE_BOARD_KEY': JSON.stringify(process.env.VITE_BOARD_KEY)
  }
})
