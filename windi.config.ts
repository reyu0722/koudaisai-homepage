import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        background: '#131229',
        mypurple: '#B7B4EA',
        mycyan: '#96dceb',
        myblack: '#1E3040'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        noto: ['Noto Sans JP', 'sans-serif']
      }
    }
  }
})
