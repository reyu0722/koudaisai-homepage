import { defineConfig } from 'vite'
import { resolve } from 'path'
import preact from '@preact/preset-vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': resolve(__dirname, 'src').replace(/\\/g, '/'),
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  plugins: [preact(), WindiCSS()]
})
