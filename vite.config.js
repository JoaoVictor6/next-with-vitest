/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@next/font/local': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
