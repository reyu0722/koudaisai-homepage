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
        '.fade-in': {
          animation: 'fadeIn 2s ease 0s 1 normal'
        }
      })
    })
  ]
})
