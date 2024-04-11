import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/GitHub-Repository-Issues-Manager/',
  plugins: [svgr(), react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@app': `${path.resolve(__dirname, './src/app/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@widgets': `${path.resolve(__dirname, './src/widgets/')}`,
      '@features': `${path.resolve(__dirname, './src/features/')}`,
      '@entities': `${path.resolve(__dirname, './src/entities/')}`,
      '@shared': `${path.resolve(__dirname, './src/shared/')}`,
    },
  },
})
