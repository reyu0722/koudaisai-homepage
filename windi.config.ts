import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        background: '#131229',
        mypurple: '#B7B4EA'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    }
  }
})
