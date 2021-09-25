import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        background: '#131229'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.fade-in-wog': {
          animation: 'fadeInDelay 1s ease 0s 1 normal'
        },
        '.fade-in-illust': {
          animation: 'fadeInDelay 3s ease 0s 1 normal'
        },
        '.header-animation': {
          animation: 'headerAnimation 2s ease 0s 1 normal'
        }
      })
    })
  ]
})
