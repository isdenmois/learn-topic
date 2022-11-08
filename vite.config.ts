import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // rollupOptions: {
    //   plugins: [visualizer({ filename: 'dist/stats.html', open: true })],
    // },
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      pages: resolve(__dirname, 'src/pages'),
      entities: resolve(__dirname, 'src/entities'),
      shared: resolve(__dirname, 'src/shared'),
    },
  },
})
